import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import QuizData from "./models/quizSchema.js";

const PORT = process.env.PORT || 4000;
const app = express();

// MIDDLEWARE
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// CONNECT MONGOOSE
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected!!"))
  .catch((err) => console.log("Error connecting", err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/quiz/questions", (req, res) => {
  const quizz = new QuizData(req.body);
  quizz
    .save()
    .then(() => {
      res.status(201).json({ message: "Quiz Saved Successfully." });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/quiz/all", async (req, res) => {
  QuizData.find({})
    .then((quizz) => {
      res.status(200).json(quizz);
    })
    .catch((err) => {
      console.log("Error is: ", err);
      res.send(500).json({message: err});
    });
});

app.get(`/quiz/:quizId`, async (req, res) => {
  const { quizId } = req.params;  
  QuizData.findById(quizId)
    .then((quizz) => {
      res.status(200).json(quizz);
    })
    .catch((err) => {
      res.status(500).json({message: err.message})
    })
});

// app.get('/quiz/score', async (req, res) => {
//   console.log(req.body);
// })

app.listen(PORT, () => {
  console.log("Server is listening");
});
