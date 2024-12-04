import mongoose from "mongoose";

// MONGOOSE SCHEMA
const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  describe: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  questions: [
    {
        type: {
            type: String,
            required: true,
        },
        question: { 
            type: String, 
            required: true 
        },
        correctAnswer: { 
            type: String, 
            required: true 
        },
        wrongAnswers: { 
            type: [String], 
            default: [] 
        },
    },
  ],
});

// CREATE A MODEL
const QuizData = mongoose.model("quizz", QuizSchema);
export default QuizData;