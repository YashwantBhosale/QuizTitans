import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../styles/home.module.css";

const Home = () => {
  const { logout } = useAuth0();

  return (
    <>
      <div className="home">
        <Link to="/home">Home</Link>
        <Link to="/quiz/create">CreateQuiz</Link>
        <Link to="/quiz/view">View Quiz</Link>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
