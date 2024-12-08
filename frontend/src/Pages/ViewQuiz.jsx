import axios from "axios";
import React, { useEffect, useState } from "react";
import '../styles/view-quiz.css';

const ViewQuiz =() => {

  const [storeData, SetStoreData] = useState([]);

  useEffect   (() => {
    axios.get("http://localhost:4000/quiz/all")
    .then((response) => {
      console.log(response.data);
      SetStoreData(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <div className="quiz-container">
      {storeData.map((quiz, index) => (
        <div className="quiz-box">
          <h2>{quiz.title}</h2>
          <p>{quiz.describe}</p>
          <h4>{quiz.domain}</h4>
          <Link to={`quiz/take/${quiz.index}`} >Take Quiz</Link>
        </div>
      ))}
    </div>
  );
};

export default ViewQuiz;
