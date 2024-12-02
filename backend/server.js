import express from "express"
import 'dotenv/config'
import  mongoose from "mongoose"
import cors from "cors"

const PORT = process.env.PORT;
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
    .catch(err => console.log("Error connecting", err))

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
const QuizData = mongoose.model('Quizz', QuizSchema);

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/quiz/questions", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(PORT, () => {
    console.log("Server is listening");
});