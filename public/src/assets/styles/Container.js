import styled from "styled-components";
import { BG_URL } from "../../utils/constants";


const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:3rem;
  // background-image:url(${BG_URL});
  background-color:#131324;
  height:100vh;
  width:100vw;
  .loader{
    max-inline-size:100%;
  }
  .title-container {
    h1{
      color:white;
    }
  }
  @media only screen and (max-width: 768px){
    .title-container {
      h1{
        color:white;
        font-size:1.4rem;
      }
    }
  }

  .avatars{
    display:flex;
    gap:2rem;
    .avatar{
      border:0.4rem solid transparent;
      padding:0.4rem;
      border-radius:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      transition:0.5s ease-in-out;
      img {
        height:6rem;
        border-radius:100%;
      }
      @media only screen and (max-width: 768px){
        img {
          height:3.5rem;
          border-radius:100%;
        }
      }
    }
    
    .selected{
      border:0.4rem solid #4e0eff;
    }
    
  }
  .submit-btn{
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
`;
export default Container;