import styled from "styled-components";

const WelcomeContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  color:white;
  img{
    height:20rem;
  }
  @media only screen and (max-width: 768px){
    img{
      height:10rem;
    }
    h1{
      font-size:2rem;
    }
    h3{
      font-size:1rem;
    }
  }
  span{
    color:#4e0eff;
  }

`;

export default WelcomeContainer;