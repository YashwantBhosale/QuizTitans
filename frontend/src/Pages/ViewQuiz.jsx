import axios from "axios";
import React, { useEffect, useState } from "react";
// import '../styles/view-quiz.css';
import {Link} from "react-router-dom"

const ViewQuiz =() => {

  const [storeData, SetStoreData] = useState([]);

  useEffect   (() => {
    axios.get("http://localhost:4000/quiz/all")
    .then((response) => {
      SetStoreData(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <div className="main-quiz-box">
      <ul className="quiz-container">
        {storeData.map((quiz, index) => (
          <li className="quiz-box" key={index}>

            <h2>{quiz.title}</h2>
            <p>{quiz.describe}</p>
            <h4>{quiz.domain}</h4>
            <Link id="take-quiz-btn" to={`/quiz/take/${quiz._id}`} >Take Quiz</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewQuiz;
