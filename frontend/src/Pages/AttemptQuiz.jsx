import React from 'react';

const TakeQuiz = () => {

    // const MyQuiz = JSON.parse(localStorage.getItem('MyQuiz'));
    // console.log(MyQuiz);

    // const quizSubmitted = (e) => {
    //     e.preventDefault();
    //     const selectedAnswer = {};
    //     MyQuiz.questions.forEach((ques, index) => {
    //         const selectedOptions = document.querySelector(`input[name="question_${index}"]:checked`);
    //         selectedAnswer[`question_${index}`] = selectedOptions ? selectedOptions.value : null; 
    //     })
    //     console.log(selectedAnswer);
    // }

    return (
        <div className="take-quiz-box">
            <h1 className='quiz-title'>MyQuiz.title</h1>
            <h5 className='quiz-descp'>MyQuiz.description</h5>

                    <div className="take-quiz-box">

                        <div className="take-quiz-form">
                            <h4>ques.question</h4>
                            <div className="options">
                                    <div className="option">
                                        <label>
                                            <input type="radio" className='radio-btn' required />
                                            option
                                        </label>
                                    </div>
                            </div>
                        </div>

                    </div>

            <button className='submit-btn' >Submit</button>
        </div>
    );
};

export default TakeQuiz;