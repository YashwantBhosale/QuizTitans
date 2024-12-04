import React from "react";

const ViewQuiz = () => {
  // const navigate = useNavigate();
  // const [quizData, setQuizData] = useState([]);

  // const fetchData = async () => {
  //     try {
  //         const response = await axios.get('http://localhost:4000/quiz/show');
  //         setQuizData(response.data);
  //     } catch (error) {
  //         console.error('Error fetching quiz data:', error);
  //     }
  // };

  // useEffect(() => {
  //     fetchData();
  // }, []);

  // const takeQuiz = async (quizId) => {
  //     try {
  //         const MyQuiz = await axios.get(`http://localhost:4000/quiz/${quizId}`);
  //         localStorage.setItem('MyQuiz', JSON.stringify(MyQuiz.data));
  //         navigate('/attempt-quiz');
  //     } catch (error) {
  //         console.log("Error fetching data", error);
  //     }
  // };

  return (
    <div className="view_container">
      <ul className="view_list">
        <li key={index} className="view_box">
          <h2>{quiz.title}</h2>
          <p>{quiz.description}</p>
          <button className="take-quiz-btn">Take Quiz</button>
        </li>
      </ul>
    </div>
  );
};

export default ViewQuiz;
