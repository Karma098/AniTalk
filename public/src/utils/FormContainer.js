import styled from "styled-components";
import { BG_URL } from "../utils/constants";


const FormContainer = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:1rem;
  align-items:center;
  // background-color:#131324;
  background-image:url(${BG_URL});
  .brand{
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
    img {
      height:5rem;
    }
    h1{
      color:white;
      text-transform:uppercase;
    }
  }
  form{
    display:flex;
    flex-direction:column;
    gap:2rem;
    background-color:#00000076;
    border-radius:2rem;
    padding:3rem 5rem;
    .password-div{
      display:flex;
    }
    .password-btn{
      padding:5px;
      margin-top:10px;
      margin-bottom:10px;
      margin-left:-30px;
      border-radius:100%;
      background:none;
      &:hover{
        background-color:black;
      }
    }
    input{
      background-color:transparent;
      padding:1rem;
      border:0.1rem solid #8b0000;
      color:white;
      width:100%;
      font-size:1rem;
      text-transform:lowercase;
      &:focus{
        border:0.1rem solid #997af0;
        outline:none;
      }
    }
    select{
      font-family: 'Blomberg';
      background-color:transparent;
      padding:1rem;
      border:0.1rem solid #8b0000;
      color:white;
      width:100%;
      font-size:1rem;
      text-transform:lowercase;
      &:focus{
        border:0.1rem solid #997af0;
        outline:none;
      }
      option{
        background-color:black;
      }
    }
    button{
      background-color:	#8b0000;
      color:white;
      padding:1rem 2rem;
      border:none;
      font-weight:bold;
      cursor:pointer;
      border-radius:0.4rem;
      font-size:1rem;
      text-transform:uppercase;
      transition:0.5s ease-in-out;
      &:hover{
        background-color:#bb0a1e;
      }
    }
    span{
      color:white;
      text-transform:uppercase;
      a{
        color:#4e0eff;
        text-decoration:none;
        font-weight:bold;
      }
    }
  }

`;

export default FormContainer;