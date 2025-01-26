import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../styles/root.module.css';
import ShowQuiz from "./ShowQuiz";

const Root = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuntheticated } = useAuth0();
  console.log(user);

  return (

    <div className={styles.main}>

      <div className={styles.heroes}>
        <div className={styles.search_box}>
          <input className={styles.srh_bar} type="search" />
        </div>
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