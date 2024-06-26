import styled from "styled-components";

const ContactContainer=styled.div`
  display:grid;
  grid-template-rows:10% 75% 15%;
  overflow:hidden;
  background-color:#080420;
  .brand{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;
    img{
      height:2rem;
    }
    h3{
      color:white;
      text-transform:uppercase;
    }
  }
  .contacts{
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:auto;
    gap:0.8rem;
    &::-webkit-scrollbar{
      width:0.2rem;
      &-thumb{
        background-color:#ffffff39;
        width:0.1rem;
        border-radius: 1rem;
      }
    }
    .contact{
      background-color:#ffffff39;
      min-height:5rem;
      width:90%;
      cursor:pointer;
      border-radius:0.2rem;
      padding:0.4rem;
      gap:1rem;
      align-items:center;
      display:flex;
      transition:0.5s ease-in-out;
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
      @media only screen and (max-width: 768px){
        min-height:3rem;
        .avatar{
          img{
            height:2rem;
            border-radius:100%;
          }
        }
        .username{
          h3{
            font-size:1rem;
            color:white;
          }
        }
      }
    }
    .selected{
      background-color:#9a86f3;
    }
  }
  .current-user{
    background-color:#0d0d30;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
    .avatar{
      img{
        height:4rem;
        max-inline-size:100%;
        border-radius:100%;
      }
    }
    .username{
      h2{
        color:white;
      }
    }
    @media only screen and (max-width: 768px){
      .avatar{
        img{
          height:2rem;
          max-inline-size:100%;
          border-radius:100%;
        }
      }
      gap:0.5rem;
      .username{
        h2{
          font-size:1rem;
        }
      }
    }
  }

`;

export default ContactContainer;