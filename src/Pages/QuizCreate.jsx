import React from "react";
import "../styles/quiz-create.css";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const QuizCreate = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="create-quiz-box">
      <form className="create-quiz-form">
        <label>Title</label>
        <textarea className="title" required />

        <label>Description</label>
        <textarea className="describe" required />

        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value='Science'>Science</MenuItem>
            <MenuItem value='Coding'>Coding</MenuItem>
            <MenuItem value='Cooking'>Cooking</MenuItem>
            <MenuItem value='Anime'>Anime</MenuItem>
            <MenuItem value='Entertainment'>Entertainment</MenuItem>
            <MenuItem value='Cooking'>Cooking</MenuItem>
          </Select>
        </FormControl>

        <Link to="/quiz/questions" type="submit" className="submit">
          Create Quiz
        </Link>
      </form>
    </div>
  );
};

export default QuizCreate;
