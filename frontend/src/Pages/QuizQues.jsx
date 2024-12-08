import { useState } from "react";
import axios from "axios";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import "../styles/ques-create.css";
import { useLocation } from "react-router-dom";

const QuizTest = (props) => {
  const state = useLocation();
  const { title, describe, domain } = state.state;

  const [quizData, SetquizData] = useState({
    title,
    describe,
    domain,
    questions: [
      {
        index: 0,
        type: "mcq",
        question: "",
        correctAnswer: "",
        wrongAnswers: ["", "", ""],
      },
    ],
  });

  const [selectedType, setSelectedType] = useState("");

  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const types = [
    { label: "MCQ", value: "mcq" },
    { label: "Subjective", value: "long_ans" },
    { label: "True/False", value: "true_false" },
  ];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNewQuestion = () => {
    if (selectedType !== "") {
      setErrorMessage(""); // Clear error message when adding a valid question
      const newData = {
        index: quizData.questions.length,
        type: selectedType,
        question: "",
        correctAnswer: "",
        wrongAnswers: selectedType === "mcq" ? ["", "", ""] : [],
      };

      SetquizData((prev) => ({
        ...prev, // Spread the existing quizData object
        questions: [...prev.questions, newData], // Append the new question to the questions array
      }));
    } else {
      setErrorMessage(
        "Please select a question type before adding a new question."
      );
    }
  };

  const handleDelQuestion = (event) => {
    if (quizData.questions.length === 1) return; // Prevent deleting the last question

    const quesId = parseInt(event.target.id.replace("del-", ""), 10); // Extract question ID
    SetquizData((prevData) => ({
      ...prevData,
      questions: prevData.questions.filter((_, index) => index !== quesId),
    }));
  };

  const handleInputChange = (index, field, value) => {
    SetquizData((prevData) => {
      const updatedQuestions = prevData.questions.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const uploadQuiz = async () => {
    // CHECK DATA VALIDITY
    for (let i = 0; i < quizData.questions.length; i++) {
      const { question, correctAnswer, wrongAnswers, type } =
        quizData.questions[i];

      // Validation for MCQ
      if (
        type === "mcq" &&
        (!question.trim() ||
          !correctAnswer.trim() ||
          wrongAnswers.some((ans) => !ans.trim()))
      ) {
        setErrorMessage(`Please fill out all fields for question ${i + 1}.`);
        return;
      }

      // Validation for True/False
      if (
        type === "true_false" &&
        (!question.trim() || !correctAnswer.trim())
      ) {
        setErrorMessage(`Please complete the True/False question ${i + 1}.`);
        return;
      }

      // Validation for Subjective
      if (type === "long_ans" && !question.trim()) {
        setErrorMessage(
          `Please provide a question for the subjective question ${i + 1}.`
        );
        return;
      }
    }

    try {
      const response = await axios.post(
        // for localhost
        "http://localhost:4000/quiz/questions",
        // for production
        // it is not working cause hobby plan only gives max 5sec for API requests ( atlas )
        // "https://quiz-titans.vercel.app/",
        quizData
      );
      console.log("Quiz uploaded successfully:", response.data);
      setErrorMessage(""); // Clear any previous errors
    } catch (error) {
      console.error("Error uploading quiz:", error);
      setErrorMessage("Failed to upload quiz. Please try again.");
    }
  };

  return (
    <div className="create-quiz-div">
      {quizData.questions.map((data, index) => (
        <div className="quiz-container" key={index}>
          <textarea
            name="question"
            value={data.question}
            placeholder="add new question"
            onChange={(e) =>
              handleInputChange(index, "question", e.target.value)
            }
          ></textarea>

          {data.type === "mcq" && (
            <>
              <textarea
                name="correct-answer"
                placeholder="add correct answer"
                value={data.correctAnswer}
                onChange={(e) =>
                  handleInputChange(index, "correctAnswer", e.target.value)
                }
              ></textarea>

              {data.wrongAnswers.map((answer, i) => (
                <textarea
                  key={`wrong-answer-${index}-${i}`}
                  value={answer}
                  placeholder={`wrong answer-${i + 1}`}
                  onChange={(e) => {
                    const updatedAnswers = [...data.wrongAnswers];
                    updatedAnswers[i] = e.target.value;
                    handleInputChange(index, "wrongAnswers", updatedAnswers);
                  }}
                ></textarea>
              ))}
            </>
          )}

          {data.type === "long_ans" && (
            <>
              <textarea 
                name="long-ans" 
                value={data.correctAnswer}
                id="long-ans"
                placeholder="Enter your long answer"
                onChange={(e) => {
                  handleInputChange(index, "correctAnswer", e.target.value);
                }}
              textarea />
            </>
          )}

          {data.type === "true_false" && (
            <>
              <label>
                <input
                  type="radio"
                  name={`true-false-${index}`}
                  value="true"
                  onChange={() =>
                    handleInputChange(index, "correctAnswer", "true")
                  }
                />
                True
              </label>
              <label>
                <input
                  type="radio"
                  name={`true-false-${index}`}
                  value="false"
                  onChange={() =>
                    handleInputChange(index, "correctAnswer", "false")
                  }
                />
                False
              </label>
            </>
          )}

          <div className="make-quiz-toolbar">
            <div className="remove-ques">
              <button id={`del-${index}`} onClick={handleDelQuestion}>
                -
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="add-new-ques">
        <button onClick={handleNewQuestion}>+</button>
      </div>

      <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
        <InputLabel id="quiz-type-label">Quiz Type</InputLabel>
        <Select
          labelId="quiz-type-label"
          id="quiz-type"
          value={selectedType}
          onChange={handleTypeChange}
          label="Quiz Type"
        >
          {types.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className="upload-ques">
        <button type="submit" onClick={uploadQuiz}>
          Upload
        </button>
      </div>

      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default QuizTest;
