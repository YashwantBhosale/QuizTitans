import React, { useState, useEffect } from "react";
import "../styles/quiz-create.css";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const QuizCreate = () => {

  const [domain, setdomain] = useState("");
  const [title, settitle] = useState("");
  const [describe, setdescribe] = useState("");

  const [QuizInfo, SetQuizInfo] = useState({
    title: "",
    describe: "",
    domain: "",
  });

  const handleTitleChange = (event) =>{
    settitle(event.target.value);
  };

  const handleDescribeChange = (event) =>{
    setdescribe(event.target.value);
  };

  const handleDomainChange = (event) => {
    setdomain(event.target.value);
  };

  const HandleUpdate = () => {
    if(!title.trim() || !describe.trim() ||!domain.trim()){
      document.getElementsByClassName("err-msg").style.display = "visible";
      return;
    }
  }

  useEffect(() => {
    SetQuizInfo({ title, describe, domain });
  }, [title, describe, domain]);

  return (
    <div className="create-quiz-box">

      <form className="create-quiz-form">

        <label>Title</label>
        <textarea className="title" required onChange={handleTitleChange} />

        <label>Description</label>
        <textarea className="describe" required onChange={handleDescribeChange} />

        <FormControl sx={{ m: 1, minWidth: 120 }} required >
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
            <MenuItem value='Science'>Science</MenuItem>
            <MenuItem value='Coding'>Coding</MenuItem>
            <MenuItem value='Cooking'>Cooking</MenuItem>
            <MenuItem value='Anime'>Anime</MenuItem>
            <MenuItem value='Entertainment'>Entertainment</MenuItem>
            <MenuItem value='Cooking'>Cooking</MenuItem>
          </Select>
        </FormControl>

        <Link onClick={HandleUpdate} to={{pathname:"/quiz/questions", state: QuizInfo} } type="submit" className="submit">
          Create Quiz
        </Link>

        <p style={{display: "none",color: "red"}} className="error-msg">Please fill all the boxes</p>

      </form>
    </div>
  );
};

export default QuizCreate;
