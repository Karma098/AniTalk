import React, { useEffect, useState } from "react";
import logo from "../assets/logo2.jpg";
import ContactContainer from "../assets/styles/ContactContainer";
import ContactShimmer from "./ContactShimmer";
const Contact = ({ contacts, currentUser,changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <ContactContainer>
          <div className="brand">
            <img src={logo} alt="logo" />
            <h3>AniTalk</h3>
          </div>{
            !contacts?<ContactShimmer/>:
            (<div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={contact._id}
                  onClick={()=>{changeCurrentChat(index,contact)}}
                >
                  <div className="avatar">
                    <img src={contact.avatarImage} alt="avatar" />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>)
          }
          
          <div className="current-user">
            <div className="avatar">
              <img src={currentUserImage} alt="avatar" />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </ContactContainer>
      )}
    </>
  );
};

export default Contact;
