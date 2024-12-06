import express from "express"
import 'dotenv/config'
import  mongoose from "mongoose"
import cors from "cors"
import QuizSchema from "./models/quizSchema.js"
import QuizData from "./models/quizSchema.js"

const PORT = process.env.PORT || 4000;
const app = express();

// MIDDLEWARE
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded data (for form submissions)
// app.use(express.urlencoded({ extended: true }));

// CONNECT MONGOOSE
const uri = process.env.MONGO_URI;
mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected!!"))
    .catch(err => console.log("Error connecting", err));


app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/quiz/questions", (req, res) => {
    const quizz = new QuizData(req.body);
    quizz.save().then(() => {
        res.status(201).json({ message: "Quiz Saved Successfully."})
    }).catch((err) => res.status(500).json( {error: err.message} ));
});

app.listen(PORT, () => {
    console.log("Server is listening");
});