import styled from "styled-components";
import { BG_URL } from "../../utils/constants";

const ChatContainer=styled.div`
  height:100vh;
  width;100vw;
  display:flex;
  flex-direction:columnn;
  justify-content:center;
  gap:1rem;
  align-items:center;
  background-color:#131324;
  // background-image:url(${BG_URL});
  .container{
    height:85vh;
    width:85vw;
    background-color:#00000076;
    display:grid;
    grid-template-columns:25% 75%;
    @media only screen and (max-width: 768px){
      grid-template-columns:0% 100%;
    }
  }
`;

export default ChatContainer;