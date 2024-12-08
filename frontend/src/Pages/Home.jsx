import React from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/quiz/create">CreateQuiz</Link>
      <Link to="/quiz/view">View Quiz</Link>
      <Link to="/quiz/take/:id">Solve Quiz</Link>
      <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
    </div>
  )
};

export default Home
