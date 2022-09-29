import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./QuestionsAndAnswers.css";

const QAndAs = () => {
  const [questionsAnswers, setQuestionsAnswers] = React.useState([]);
  React.useEffect(() => {
    fetch("ques-and-ans.json")
      .then((response) => response.json())
      .then((data) => setQuestionsAnswers(data));
  }, []);
  return (
    <div className="questions-and-answers">
      <Typography align="center" variant="h3" color="primary" sx={{ mt: 5 }}>
        Questions and Answers
      </Typography>
      {questionsAnswers.map((questionAnswer, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{questionAnswer["question"]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{questionAnswer["answer"]}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default QAndAs;
