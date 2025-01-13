import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ViewQuiz from "./ViewQuiz";
import '../styles/root.css'

const Root = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuntheticated } = useAuth0();
  console.log(user);

  return (

    <div className="main-cont">

      <div className="log-in">
        This is root.
        {!isAuntheticated ? (
          <button className="log-in-btn"  onClick={() => loginWithRedirect()}>Login</button>
        ) : (
          <>

          </>
        )}
      </div>

      <ViewQuiz />

    </div>
  );
};

export default Root;