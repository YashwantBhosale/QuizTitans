import mongoose from "mongoose";

// MONGOOSE SCHEMA
const QuizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    }
});

// CREATE A MODEL
const QuizData = mongoose.model('quizz', QuizSchema);
export default QuizData;