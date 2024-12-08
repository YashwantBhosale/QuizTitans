import axios from "axios";
import React, { useEffect, useState } from "react";
import '../styles/view-quiz.css';
import {Link} from "react-router-dom"

const ViewQuiz =() => {

  const [storeData, SetStoreData] = useState([]);

  useEffect   (() => {
    axios.get("https://quiz-titans.vercel.app/quiz/all")
    .then((response) => {
      SetStoreData(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <div className="quiz-container">
      {storeData.map((quiz, index) => (
        <div className="quiz-box" key={index}>

          <h2>{quiz.title}</h2>
          <p>{quiz.describe}</p>
          <h4>{quiz.domain}</h4>
          <Link id="take-quiz-btn" to={`/quiz/take/${quiz._id}`} >Take Quiz</Link>
          
        </div>
      ))}
    </div>
  );
};

export default ViewQuiz;
