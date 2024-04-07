import styled from "styled-components";

const ChatContainer=styled.div`
  height:100vh;
  width;100vw;
  display:flex;
  flex-direction:columnn;
  justify-content:center;
  gap:1rem;
  align-items:center;
  background-color:#131324;
  .container{
    height:85vh;
    width:85vw;
    background-color:#00000076;
    display:grid;
    grid-template-columns:25% 75%;
    @media screen and (min-width:360px)and(max-width:480px){
      grid-template-columns:35% 65%;
    }
  }
`;

export default ChatContainer;