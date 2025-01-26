import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ShowQuiz from "./ShowQuiz";
import styles from "../styles/root.module.css";
import hero_img1 from "../assets/hero_img1.jpeg";
import hero_img2 from "../assets/hero_img2.jpeg";
import hero_img3 from "../assets/hero_img3.jpeg";
import hero_img4 from "../assets/hero_img4.jpeg";
import hero_img5 from "../assets/hero_img5.jpeg";
import hero_img6 from "../assets/hero_img6.jpeg";

const Root = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuntheticated } = useAuth0();
  console.log(user);

  return (

    <div className={styles.main}>

      <div className={styles.banner}>
        <h1 className={styles.web_title}>QuizTitans</h1>
        <div className={styles.slider} style={{ "--quantity": 6 }}>
          <div className={styles.item} style={{ "--position": 1 }}>
            <img src={hero_img1} alt="image1" />
            Coding
          </div>
          <div className={styles.item} style={{ "--position": 2 }}>
            <img src={hero_img2} alt="image2" />
            Anime
          </div>
          <div className={styles.item} style={{ "--position": 3 }}>
            <img src={hero_img3} alt="image3" />
            Cooking
          </div>
          <div className={styles.item} style={{ "--position": 4 }}>
            <img src={hero_img4} alt="image4" />
            Sports
          </div>
          <div className={styles.item} style={{ "--position": 5 }}>
            <img src={hero_img5} alt="image5" />
            Geography
          </div>
          <div className={styles.item} style={{ "--position": 6 }}>
            <img src={hero_img6} alt="image6" />
            GK
          </div>
        </div>
      </div>

      <div className={styles.heroes}>
        
        {!isAuntheticated ? (
          <>
            <p onClick={() => loginWithRedirect()} >Create Quiz</p>
            <p onClick={() => loginWithRedirect()} >Profile</p>
            <button className={styles.log}  onClick={() => loginWithRedirect()}>Login</button>
          </>
        ) : (
          <>
            <p>Create Quiz</p>
            <p>Profile</p>
            <button >Logout</button>
          </>
        )}
      </div>

      <ShowQuiz />

    </div>
  );
};

export default Root;