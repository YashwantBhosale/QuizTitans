import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Root = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuntheticated } = useAuth0();
  console.log(user);

  return (
    <div>
      This is root.
      {!isAuntheticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <button></button>
      )}
      {/* <Link to="/home">Home</Link>
      <Link to="/quiz/create">CreateQuiz</Link>
      <Link to="/quiz/view">View Quiz</Link>
      <Link to="/quiz/solve">Solve Quiz</Link> */}
    </div>
  );
};

export default Root;
