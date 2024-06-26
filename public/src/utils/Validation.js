import {toast} from "react-toastify";

export const toastOptions={
  position:"bottom-right",
  autoClose:8000,
  pauseOnHover:true,
  draggable:true,
  theme:"dark"
};


export const handleValidationRegister=(values)=>{
  const {password,confirmPassword,username,email}=values;
  if(password!==confirmPassword){
    toast.error("Password and confirm password should be same",toastOptions);
    return false;
  }else if(username.length<3){
    toast.error("Username should be greater than 3 characters",toastOptions);
    return false;
  }else if(password.length<8){
    toast.error("Password should equal or greater than 8 charaters",toastOptions);
    return false;
  }else if(email===""){
    toast.error("Email is required",toastOptions);
    return false;
  }
  return true;
};



export const handleValidationLogin=(values)=>{
  const {password,username}=values;
  if(password===""){
    toast.error("Email and password is required",toastOptions);
    return false;
  }else if(username.length===""){
    toast.error("Email and password is required",toastOptions);
    return false;
  }
  return true;
};

