import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/showquiz.module.css";
import { Link } from "react-router-dom";

const ShowQuiz = () => {
  const [QuizData, SetQuizData] = useState([]);
  const DomainData = [
    "Coding",
    "Science",
    "Anime",
    "Cooking",
    "Personal Knowledge",
  ];
  const API = "http://localhost:4000/quiz/all";

  // Use Effect Hook
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        SetQuizData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // [] empty list no dependancy

  let carouselDiv = document.querySelector(`${styles.quiz_domain_list}`);
  console.log(carouselDiv);

  return (
    <>
      {DomainData.map((dom) => (
        <div className={styles.QuizList} key={dom}>
        <h1 className={styles.domainName}>{dom}</h1>
          <div id={styles[dom]} className={styles.quiz_domain_list}>
            {QuizData.filter((d) => d.domain == dom).map((d) => (
              <div key={d._id} className={styles.quiz_box}>
                <p>{d.title}</p>
                <p>{d.domain}</p>
                <p>{d.describe}</p>
                <Link className={styles.quiz_btn} to={`/quiz/take/${d._id}`}>
                Take Quiz
                </Link>
              </div>
            ))}
            {/* <div className={styles. }></div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowQuiz;
