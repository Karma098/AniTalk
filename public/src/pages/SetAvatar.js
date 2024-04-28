import React, { useEffect, useState } from "react";
import loader from "../assets/loader.gif";
import { ANIME_ARRAY, AVATAR_URL, BG_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { toastOptions } from "../utils/Validation";
import { setAvatarRoute } from "../utils/APIRoutes";
import Container from "../assets/styles/Container";

const SetAvatar = () => {
  // console.log(avatar);
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("AniTalk-user")) {
      navigate("/login");
    }
  }, []);

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("PLease pick an avatar", toastOptions);
    } else {
      const user = await JSON.parse(localStorage.getItem("AniTalk-user"));
      const route = `${setAvatarRoute}/${user._id}`;
      const { data } = await axios.put(route, {
        image: avatars[selectedAvatar],
      });
      // console.log(data);
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("AniTalk-user", JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("Error setting avatar, Please try again", toastOptions);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("ding1");
      const promises = [];
      const data = [];
      while (data.length < 4) {
        for (let i = data.length; i < 4; i++) {
          const index = Math.floor(Math.random() * 9);
          const anime = ANIME_ARRAY[index];
          const gender = JSON.parse(
            localStorage.getItem("AniTalk-user")
          )?.gender;
          const animeCount = Math.floor(Math.random() * 50) + 1;
          const avatar =
            AVATAR_URL + anime + "/" + gender + "/" + animeCount + ".jpg";
          promises.push(
            fetch(avatar).then((response) => {
              if (response.status !== 404) {
                data.push(avatar);
              }
            })
          );
        }
        await Promise.all(promises);
      }
      setAvatars(data);
      console.log("ding ding");
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>
          <img src={loader} alt="loader" className="loader" />
        </Container>
      ) : (
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
                    alt="avatar"
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button className="submit-btn" onClick={setProfilePicture}>
            Set as Profile Picture
          </button>
        </Container>
      )}
      <ToastContainer />
    </>
  );
};

export default SetAvatar;
