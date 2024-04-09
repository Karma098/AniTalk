import React from "react";
import styled from "styled-components";

const ContactShimmer = () => {
  return (
    <div className="contacts">
      {Array(10).fill(" ").map((contact) => {
        return (
          <div className={`contact`} key={contact._id}>
            <div className="avatar">
              <img src={contact?.avatarImage} alt="avatar" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Component=styled.div`
  .contacts{
    .contact{
      background-color:#ffffff39;
      min-height:5rem;
      width:90%;
      // height:10%;
      cursor:pointer;
      border-radius:0.2rem;
      padding:0.4rem;
      gap:1rem;
      .avatar{
        img{
          height:3rem;
          border-radius:100%;
          background-color:black;
        }
      }
    }
  }
`;

export default ContactShimmer;
