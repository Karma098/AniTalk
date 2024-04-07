import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import {ToastContainer,toast} from "react-toastify";
import {FaEye,FaEyeSlash} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import {handleValidationRegister, toastOptions } from "../utils/Validation";
import FormContainer from "../assets/styles/FormContainer";


const Register = () => {
  const [showPassword,setShowPassword]=useState(false);

  const [values,setValues]=useState({
    username:"",
    email:"",
    gender:"",
    password:"",
    confirmPassword:"",
  });

  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("AniTalk-user")){
      navigate('/');
    }
  },[]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidationRegister(values)){
      const {password,gender,username,email}=values;
      const {data}=await axios.post(registerRoute,{username,email,gender,password,});
      if(data.status===false){
        toast.error(data.msg,toastOptions);
      };
      if(data.status===true){
        localStorage.setItem("AniTalk-user",JSON.stringify(data.user));
        navigate('/setAvatar');
      }
    }
  };

  const handleChange=(event)=>{
    setValues({...values,[event.target.name]: event.target.value});
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={logo} alt="" />
            <h1>AniTalk</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <select name="gender" onChange={(e)=>handleChange(e)}>
          <option value="" disabled selected hidden>Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <div className="password-div">
            <input
              type={showPassword?"text":"password"}
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button className="password-btn" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</button>
          </div>
          <div className="password-div">
            <input
              type={showPassword?"text":"password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
            />
            <button className="password-btn" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</button>
          </div>
          <button type="submit">
            Create User
          </button>
          <span>Already have an account? <Link to='/login'> Login</Link></span>
        </form>
      </FormContainer>
      <ToastContainer/>
    </>
  );
};



export default Register;
