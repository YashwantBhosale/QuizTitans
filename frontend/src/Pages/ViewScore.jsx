import React, { useEffect, useState } from "react";
import styles from "../styles/view_score.module.css";
import { useLocation } from "react-router-dom";

const ViewScore = () => {
  const loc = useLocation();
  const [score, setScore] = useState(0);

  const [studAnswer] = useState(loc.state[0]);
  const [corrAnswer] = useState(loc.state[1]);

  useEffect(() => {
    let newscore = 0;

    for (let key in studAnswer) {
      if (
        corrAnswer.questions[key[key.length - 1]].correctAnswer ==
        studAnswer[key]
      ) {
        newscore++;
      }
    }
    setScore(newscore);
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        Your score is {score}/{corrAnswer.questions.length}
      </h1>
    </div>
  );
};

export default ViewScore;
