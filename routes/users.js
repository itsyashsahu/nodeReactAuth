var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');
const User = require('../db/userSchema');
const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET = "dheredherebol koi sun na le";


//middle to check if the user is logged in or not
const requireLogin = (req,res,next) => {
  const {authorization} = req.headers;
  if(!authorization){
    return res.status(401).json({error:"You must be logged In "});
  }
  try{
      const { userId } = jwt.verify(authorization,JWT_SECRET)
      req.user = userId;
      next()
  }catch(err){
      return res.status(401).json({error:"You must be logged In Understand"});
  }
}


router.get('/',requireLogin, async function(req, res, next) {
  var id = req.user;
  // console.log(id);
  try{
    const user = await User.findById({"_id": id },{_id:0,firstname:1,lastname:1,email:1,phone:1,address:1})
        .then( (res)=>{
            // console.log("this is result of get userData",res);
            return res
        })
        .catch( (err) =>{
          console.log(err);

        })
        res.send(user);

  }catch(err){
    console.log(err)
  }
});


//signup request 
router.post('/signup', async function(req, res, next) {
  try{
    
    const { firstname, lastname ,email,phone ,address,password } = req.body;
    // console.log(req.body);
    // console.log(name,email,password);
    if(!email || !password ){
      // status 422 means client jo karna chahta h wo server samajh gaya h 
      // but for some reasons server wo process nhi kr skta like password glt h etc 
      // we use return because uske baad baki ka codee execute nhi hona chahiye

      return res.status(422).json({error:"Please add All the fields"});
    } 
    const user = await User.findOne({email:email});
    //agar user mil jata h means wo already database mein h toh error denge
    if(user){
      // made a coustom error status 424 which signifies that user already exsits
      return res.status(424).json({error:"user already exits"})
    }

    const hashedPass = await bcrypt.hash(password,12);
    var userId;
    await new User({
      firstname:firstname,
      lastname:lastname,
      email:email,
      phone:phone,
      address:address,
      password:hashedPass,
    }).save((err,users)=>{
      userId = users.id;
      // console.log("yeh mila kya",userId,users.id);
      const token = jwt.sign({ userId: userId }, JWT_SECRET);
      // console.log("this is userID ",userId);
      return res.status(201).json({token});
    })

    // retrive object id from these and sign the token with it and send the token in response 

    // console.log(responst.id,"asdlfkhjas")

    // const token = await jwt.sign({ userId: userId }, JWT_SECRET);
    // console.log("this is userID ",userId);
    // return res.status(201).json({token});
    // res.status(200).json({message:"You Can Login Now "});
    res.status(500).json({message:"Unable to register, please try again"});

  }catch(err){
    console.log(err);
  }
});


// dummy data for signup
// {
//   "name":"jesica",
//   "email":"jesi@gmail.com",
//   "password":"asdf"
// }

//signIn Request 
router.post('/signin', async function(req, res, next) {
  
  try{
    
    const { email,password } = req.body;
    if(!email || !password ){
      // status 422 means client jo karna chahta h wo server samajh gaya h 
      // but for some reasons server wo process nhi kr skta like password glt h etc 
      // we use return because uske baad baki ka codee execute nhi hona chahiye

      // yeh 422 hona chahiyr mene isse 4220 bana diya h taki mein apne code mein ise use kr sako 
      return res.status(4220).json({error:"Please add All the fields"});
    } 
    const user = await User.findOne({email:email});
    //agar user nhi milta h means usko signup krna chahiye h toh error denge
    if(!user){
      return res.status(422).json({error:"user does not exits"})
    }
    const doMatch = bcrypt.compareSync(password,user.password);

    if(doMatch){
      // generating jwt token 
      // console.log("do match is true",user.name)
      const token = await jwt.sign({userId:user._id},JWT_SECRET);
      return res.status(201).json({token});
    }else{
      return res.status(401).json({error:"Email or Password is Invalid"});   
    }

  }catch(err){
    console.log(err);
  }
});

module.exports = router;