import React, { useEffect, useState } from "react";
import loader from "../assets/loader.gif";
import { ANIME_ARRAY, AVATAR_URL, BG_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { Buffer } from "buffer";
import axios from "axios";
import { toastOptions } from "../utils/Validation";
import { setAvatarRoute } from "../utils/APIRoutes";

const SetAvatar = () => {
  // console.log(avatar);
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  useEffect(()=>{
    if(!localStorage.getItem("AniTalk-user")){
      navigate('/login');
    }
  },[]);

  const setProfilePicture = async () => {
    if(selectedAvatar===undefined){
      toast.error("PLease pick an avatar",toastOptions);
    }else{
      const user=await JSON.parse(localStorage.getItem("AniTalk-user"));
      const route=`${setAvatarRoute}/${user._id}`;
      const {data}=await axios.post(route,{
        image:avatars[selectedAvatar],
      });
      // console.log(data);
      if(data.isSet){
        user.isAvatarImageSet=true;
        user.avatarImage=data.image;
        localStorage.setItem("AniTalk-user",JSON.stringify(user));
        navigate("/");
      }else{
        toast.error("Error setting avatar, Please try again",toastOptions);
      }
    }
  };

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * 9);
      const anime = ANIME_ARRAY[index];
      const gender = JSON.parse(localStorage.getItem('AniTalk-user')).gender;
      // console.log(gender);
      const animeCount = Math.floor(Math.random() * 10) + 1;

      const avatar = AVATAR_URL + anime + "/" + gender + "/" + animeCount + ".jpg";
      const image = avatar;
      // console.log(image);
      // const buffer = new Buffer(image);
      data.push(image);
    }
    setAvatars(data);
    setIsLoading(false);
  }, []);

  return (
    <>
    {
      isLoading?<Container>
        <img src={loader} alt="loader" className="loader"/>
      </Container>:(

        <Container>
        <div className="title-container">
          <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar, index) => {
            // console.log(avatar);
            return (
              <div
                key={index}
                className={`avatar ${
                  selectedAvatar === index ? "selected" : ""
                }`}
              >
                <img 
                src={avatar} 
                alt='avatar'
                onClick={()=>setSelectedAvatar(index)}
                />
              </div>
            );
          })}
        </div>
        <button className="submit-btn" onClick={setProfilePicture}>Set as Profile Picture</button>
      </Container>
        )
      }
      <ToastContainer />
    </>
  );
};

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

export default SetAvatar;
