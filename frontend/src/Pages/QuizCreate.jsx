import React, { useState, useEffect, useHistory } from "react";
import styles from "../styles/quiz-create.module.css";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const QuizCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/quiz/questions/", { state: QuizInfo });
  };

  const [domain, setdomain] = useState("");
  const [title, settitle] = useState("");
  const [describe, setdescribe] = useState("");

  const [QuizInfo, SetQuizInfo] = useState({
    title: "",
    describe: "",
    domain: "",
  });

  const handleTitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleDescribeChange = (event) => {
    setdescribe(event.target.value);
  };

  const handleDomainChange = (event) => {
    setdomain(event.target.value);
  };

  useEffect(() => {
    SetQuizInfo({ title, describe, domain });
  }, [title, describe, domain]);

  return (
    <div className={styles.create_quiz_main}>
      <form className={styles.quiz_create_form}>
        <label>Title</label>
        <textarea className="title" required onChange={handleTitleChange} />

        <label>Description</label>
        <textarea
          className="describe"
          required
          onChange={handleDescribeChange}
        />

        <FormControl sx={{ m: 1, minWidth: 120 }} required>
          <InputLabel id="demo-simple-select-required-label">Domain</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={domain}
            label="domain"
            onChange={handleDomainChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="Computer Science">Coding</MenuItem>
            <MenuItem value="GK">GK</MenuItem>
            <MenuItem value="Anime">Anime</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Cooking">Sports</MenuItem>
          </Select>
        </FormControl>

        <button onClick={handleSubmit} type="submit" className={styles.submit}>
          Create Quiz
        </button>

      </form>
    </div>
  );
};

export default QuizCreate;
