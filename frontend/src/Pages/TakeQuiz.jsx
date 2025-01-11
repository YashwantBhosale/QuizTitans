import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import "../styles/take-quiz.css";

const TakeQuiz = () => {
  const [options, SetOptions] = useState([]);

  const [isSubmitted, SetSubmitted] = useState(false);

  const [Ques, SetQues] = useState({
    title: "",
    describe: "",
    domain: "",
    questions: [], // Initialize questions as an empty array
  });

  const { quizId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/quiz/${quizId}`)
      .then((response) => {
        SetQues(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (Ques.questions.length > 0) {
      Ques.questions.forEach((ques) => {
        if (ques.type == "mcq") {
          ShuffleOptions(ques);
        }
      });
    }
  }, [Ques]); // run when Ques is updated

  const ShuffleOptions = (quiz) => {
    const combinedOpts = quiz.wrongAnswers.concat(quiz.correctAnswer);
    combinedOpts.sort(() => Math.random() - 0.5);
    SetOptions(combinedOpts);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const quizData = new FormData(event.target);

    const formDataObject = {};
    quizData.forEach((value, key) => {
      console.log(`${key}: ${value}`); // Log each key-value pair
      formDataObject[key] = value;
    });

    SetSubmitted(true);
  };

  return (
    <>
      {!isSubmitted && (
        <Form className="quiz-container" onSubmit={handleSubmit}>
          <div className="quiz-header">
            <h2>{Ques.title}</h2>
            <p>{Ques.describe}</p>
            <p>{Ques.domain}</p>
          </div>

          <div className="ques-container">
            {Ques.questions.map((quiz, index) => (
              <div className="quiz-ques" key={index}>
                <h3>{quiz.question}</h3>

                {quiz.type === "mcq" && (
                  <div className="opt-box">
                    {options.map((opt, optIndx) => (
                      <div key={optIndx} className="option">
                        {/* Use name attribute to select only 1 radio btn */}
                        <input
                          type="radio"
                          name={`mcq-opt${index}`}
                          value={opt}
                        />
                        <label>{opt}</label>
                      </div>
                    ))}
                  </div>
                )}

                {quiz.type === "true_false" && (
                  <div className="opt-box">
                    <div className="option">
                      <input
                        type="radio"
                        name={`bool-opt${index}`}
                        value={"true"}
                      />
                      <label>True</label>
                      <input
                        type="radio"
                        name={`bool-opt${index}`}
                        value={"false"}
                      />
                      <label>False</label>
                    </div>
                  </div>
                )}

                {quiz.type === "subjective" && (
                  <div className="answer-box">
                    <textarea
                      name={`subjective-opt${index}`}
                      className={`answer-area${index}`}
                      placeholder="enter your answer"
                      cols={10}
                    ></textarea>
                  </div>
                )}
              </div>
            ))}

            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </Form>
      )}

      { isSubmitted && (
        <>
        <h1>Quiz Saved Successfully</h1>
        <Link to={"/home"} >Home</Link>
        </>

      )}

    </>
  );
};

export default TakeQuiz;
