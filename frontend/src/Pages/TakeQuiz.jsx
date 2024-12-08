import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const TakeQuiz = () => {

  const [quiz, SetQuiz] = useState([]);
  const quizId = useParams();
  useEffect(() => {
    // axios.get(`http://localhost:4000/quiz/${quizId}`)
    axios.get(`https://quiz-titans.vercel.app/quiz/${quizId}`)
      .then((quizz) => {
        console.log(quizz);
        SetQuiz(quizz);
      })
      .catch((err) => {
        console.log(err);
      })
  })

  return (
    <div>
      
    </div>
  )
}

export default TakeQuiz
