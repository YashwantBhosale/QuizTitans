import React from "react";
import '../styles/quiz-ques.css'

const QuizQues = () => {
//   const navigator = useNavigate();
//   const [questions, setQuestions] = useState([
//     {
//       id: 0,
//       question: "",
//       correct_opt: "",
//       wrong_opt1: "",
//       wrong_opt2: "",
//       wrong_opt3: "",
//     },
//   ]);

//   const addNewQuestion = () => {
//     const lastQues = questions[questions.length - 1];
//     if (
//       !lastQues.question ||
//       !lastQues.correct_opt ||
//       !lastQues.wrong_opt1 ||
//       !lastQues.wrong_opt2 ||
//       !lastQues.wrong_opt3
//     ) {
//       return;
//     }
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length,
//         question: "",
//         correct_opt: "",
//         wrong_opt1: "",
//         wrong_opt2: "",
//         wrong_opt3: "",
//       },
//     ]);
//   };

//   const removeQuestion = (index) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions.splice(index, 1);
//     if (updatedQuestions.length === 0) {
//       navigator("/create");
//     }
//     const changeIds = updatedQuestions.map((question, idx) => ({
//       id: idx,
//       ...question,
//     }));
//     setQuestions(changeIds);
//   };

//   const HandleUpload = async () => {
//     const lastQues = questions[questions.length - 1];
//     if (
//       !lastQues.question ||
//       !lastQues.correct_opt ||
//       !lastQues.wrong_opt1 ||
//       !lastQues.wrong_opt2 ||
//       !lastQues.wrong_opt3
//     ) {
//       return;
//     }

//     const quizInfo = JSON.parse(localStorage.getItem("quizInfo"));

//     const quizData = {
//       ...quizInfo,
//       questions,
//     };

//     // send data to server
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/quiz/create",
//         quizData
//       );
//       console.log(response.data);
//       navigator("/show");
//     } catch (error) {
//       console.error("Error details:", error);
//       if (error.response) {
//         console.error("Server responded with:", error.response.data);
//         console.error("Status code:", error.response.status);
//       } else if (error.request) {
//         console.error("No response received:", error.request);
//       } else {
//         console.error("Error setting up the request:", error.message);
//       }
//     }
//   };

  return (
    <div>
      <div className="quiz-container">
        <div className="quiz-box">
          {/* {questions.map((question, index) => ( */}
            <form className="quiz-form">
                <button
                  type="button"
                  className="upload-quiz"
                >
                    upoad
                </button>
              <div>
                <label>Question </label>
                <textarea
                  className="quiz-input ques"
                  type="text"
                  placeholder="Create question.."
                  required
                />
              </div>

              <div>
                <label className="label-answer">Correct answer </label>
                <br />

                <label
                  className="options-label"
                >
                  1
                </label>
                <textarea
                  className="options"
                  type="text"
                  required
                />
                <br />

                <label className="label-answer">Other answers </label>
                <br />
                <label
                  className="options-label"
                >
                  2
                </label>
                <textarea
                  className="options"
                  type="text"
                  required
                />
                <br />

                <label
                  className="options-label"
                >
                  3
                </label>
                <textarea
                  className="options"
                  type="text"
                  required
                />
                <br />

                <label
                >
                  4
                </label>
                <textarea
                  className="options"
                  type="text"
                  required
                />
                <br />
              </div>

              <button
                type="button"
                className="add-ques"
              >+
              </button>
              <button
                type="button"
                className="save-ques"
              >
                save
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default QuizQues;