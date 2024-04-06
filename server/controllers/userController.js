const User= require("../models/userModel");
const bcrypt=require("bcrypt");

module.exports.register=async (req,res,next)=>{
  // console.log(req.body);
  try{
    const {username,email,password}=req.body;
    const usernameCheck=await User.findOne({username:username});
    if(usernameCheck)
      return res.json({msg:"Username already used",status:false});
  
    const emailCheck=await User.findOne({email:email});
    if(emailCheck) return res.json({msg:"Email already used",status:false});
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const user=await User.create({
      email,
      username,
      password:hashedPassword,
    });
    delete user.password;
    return res.json({status:true,user});
  }catch(err){
    next(err);
  }
};


module.exports.login=async (req,res,next)=>{
  // console.log(req.body);
  try{
    const {username,password}=req.body;
    const user=await User.findOne({username:username});
    if(!user)
      return res.json({msg:"Incorrect username or password",status:false});

    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid) return res.json({msg:"Incorrect username or password",status:false});
    delete user.password;
    return res.json({status:true,user});
  }catch(err){
    next(err);
  }
};