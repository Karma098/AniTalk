import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import {ToastContainer,toast} from "react-toastify";
import {FaEye,FaEyeSlash} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import {handleValidationLogin,  toastOptions } from "../utils/Validation";
import FormContainer from "../assets/styles/FormContainer";


const Login = () => {
  const [showPassword,setShowPassword]=useState(false);

  const [values,setValues]=useState({
    username:"",
    password:""
  });

  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("AniTalk-user")){
      navigate('/');
    }
  },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidationLogin(values)){
      const {password,username}=values;
      const {data}=await axios.post(loginRoute,{username,password,});
      if(data.status===false){
        toast.error(data.msg,toastOptions);
      };
      if(data.status===true){
        localStorage.setItem("AniTalk-user",JSON.stringify(data.user));
        navigate('/');
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
            min="3"
          />
          <div className="password-div">
            <input
              type={showPassword?"text":"password"}
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button className="password-btn" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</button>
          </div>
          <button type="submit">
            Login
          </button>
          <span>Don't have an account? <Link to='/register'> Register</Link></span>
        </form>
      </FormContainer>
      <ToastContainer/>
    </>
  );
};



export default Login;
