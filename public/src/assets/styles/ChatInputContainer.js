import styled from "styled-components";

const ChatInputContainer=styled.div`
  display:grid;
  grid-template-columns:5% 95%;
  align-items:center:
  background-color:#080420;
  padding:0 2rem;
  padding-bottom:0.3rem;
  @media only screen and (max-width: 768px){
    padding:1rem;
    gap:1rem;
  }
  .button-container{
    display:flex;
    align-items:center;
    color:white;
    gap:1rem;
    .emoji{
      position:relative;
      margin-bottom:1rem;
      svg{
        font-size:1.5rem;
        color:yellow;
        cursor:pointer;
      }
      .emoji-picker-react {
        position:absolute;
        top:-470px;
        background-color:#080420;
        box-shadow:0 5px 10px #9a86f3;
        border-color:#9186f3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color:#080420;
          width:5px;
          &-thumb{
            background-color:#9186f3;
          }
        }
        .emoji-categories{
          button{
            filter:contrast(0);
          }
        }
        .emoji-search{
          background-color:transparent;
          border-color:#9186f3;

        }
        .emoji-group:before {
          background-color:#080420;
        }
      }
    }
  }
  .input-container{
    width:100%;
    height:70%;
    border-radius:2rem;
    display:flex;
    align-content:center;
    gap:2rem;
    background-color:#ffffff34;
    input{
      width:90%;
      height:100%;
      background-color:transparent;
      color:white;
      border:none;
      padding-top:0.1rem;
      padding-left:1rem;
      font-size:1.2rem;
      &::selection{
        background-color:#9a86f3;

      }
      &:focus{
        outline:none;
      }
    }
    button{
      padding:0.3rem 2rem;
      border-radius:2rem;
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:#9a86f3;
      border:none;
      @media screen and (min-width:360px)and(max-width:480px){
        padding:0.3rem 1rem;
        svg{
          font-size:1rem;
        }
      }
      svg{
        font-size:2rem;
        color:white;
      }
    }
  }
`;

export default ChatInputContainer;