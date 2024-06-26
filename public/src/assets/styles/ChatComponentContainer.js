import styled from "styled-components";

const ChatComponentContainer=styled.div`
  padding-top:1rem;
  display:grid;
  grid-template-rows:10% 78% 12%;
  gap:0.1rem;
  overflow:hidden;
  @media only screen and (max-width: 768px){
    grid-template-rows:15% 70% 15%;
  }
  .chat-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.2rem;
    .user-details{
      button{
        background-color:#0ba6ff;
          border:none;
          padding:0.3rem;
          border-radius:100%;
          cursor:pointer;
      }
      display:flex;
      align-items:center;
      gap:1rem;
      .avatar{
        img{
          height:3rem;
          border-radius:100%;
        }
      }
      .username{
        h3{
          color:white;
        }
      }
    }

  }
  .chat-messages {
    padding:1rem 2rem;
    display:flex;
    flex-direction:column;
    gap:1rem;
    overflow:auto;&::-webkit-scrollbar {
      width:0.2rem;
      &-thumb{
        background-color:#ffffff39;
        width:0.1rem;
        border-radius:1rem;
      }
    }
    .message{
      display:flex;
      align-items:center;
      .content{
        max-width:40%;
        overflow-wrap:break-word;
        padding:1rem;
        font-size:1.1rem;
        border-radius:1rem;
        color:#d1d1d1;
      }
    }
    .sended{
      justify-content:flex-end;
      .content{
        background-color:#4f04ff21;
      }
    }
    .recieved{
      justify-content:flex-start;
      .content{
        background-color:#9900ff20;
      }
    }
  }
`;

export default ChatComponentContainer;