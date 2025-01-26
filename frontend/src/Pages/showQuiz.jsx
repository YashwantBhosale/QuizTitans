import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/showQuiz.module.css";

const ShowQuiz = () => {
  const [storeData, SetStoreData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/quiz/all")
      .then((response) => {
        SetStoreData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [domainTitle, SetDomainTitle] = useState([]);

  return (
    <div className={styles.main_quiz_box}>
      {storeData.map((quiz, index) => (
        <div>
          {quiz.domain === "Coding" && (
            <>
              { !domainTitle.includes("Coding") && (
                <>
                  {SetDomainTitle([...domainTitle, "Coding"])}
                  <h2>Coding</h2>
                </>
              )}
              <ul className={styles.quiz_container} key={index}>
                <li className={styles.quiz_box}>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.describe}</p>
                  <h4>{quiz.domain}</h4>
                  <Link
                    className={styles.quiz_btn}
                    to={`/quiz/take/${quiz._id}`}
                  >
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </>
          )}

          {quiz.domain === "Science" && (
            <>
              { !domainTitle.includes("Science") && (
                <>
                  {SetDomainTitle([...domainTitle, "Science"])}
                  <h2>Science</h2>
                </>
              )}
              <ul className={styles.quiz_container} key={index}>
                <li className={styles.quiz_box}>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.describe}</p>
                  <h4>{quiz.domain}</h4>
                  <Link
                    className={styles.quiz_btn}
                    to={`/quiz/take/${quiz._id}`}
                  >
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </>
          )}

          {quiz.domain === "Cooking" && (
            <>
              {!domainTitle.includes("Cooking") && (
                <>
                  {SetDomainTitle([...domainTitle, "Cooking"])}

                  <h2>Cooking</h2>
                </>
              )}
              <ul className={styles.quiz_container} key={index}>
                <li className={styles.quiz_box}>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.describe}</p>
                  <h4>{quiz.domain}</h4>
                  <Link
                    className={styles.quiz_btn}
                    to={`/quiz/take/${quiz._id}`}
                  >
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </>
          )}

          {quiz.domain === "Anime" && (
            <>
              {!domainTitle.includes("Anime") && (
                <>
                  {SetDomainTitle([...domainTitle, "Anime"])}

                  <h2>Anime</h2>
                </>
              )}
              <ul className={styles.quiz_container} key={index}>
                <li className={styles.quiz_box}>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.describe}</p>
                  <h4>{quiz.domain}</h4>
                  <Link
                    className={styles.quiz_btn}
                    to={`/quiz/take/${quiz._id}`}
                  >
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </>
          )}

          {quiz.domain === "Entertainment" && (
            <>
              {!domainTitle.includes("Entertainment") && (
                <>
                  {SetDomainTitle(prevData => [...prevData, "Entertainment"])}
                  <h2>Entertainment</h2>
                </>
              )}
              <ul className={styles.quiz_container} key={index}>
                <li className={styles.quiz_box}>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.describe}</p>
                  <h4>{quiz.domain}</h4>
                  <Link
                    className={styles.quiz_btn}
                    to={`/quiz/take/${quiz._id}`}
                  >
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </>
          )}

          {quiz.domain === "Cooking" && (
            <>
              {!domainTitle.includes("Cooking") && (
                <>
                  {SetDomainTitle(prevData => [...prevData, "Cooking"])}

                  <h2>Entertainment</h2>
                </>
              )}

              <ul className={styles.quiz_container} key={index}>
                <li className={styles.quiz_box}>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.describe}</p>
                  <h4>{quiz.domain}</h4>
                  
                  <Link
                    className={styles.quiz_btn}
                    to={`/quiz/take/${quiz._id}`}
                  >
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowQuiz;
