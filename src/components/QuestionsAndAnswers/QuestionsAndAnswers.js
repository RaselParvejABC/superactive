import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./QuestionsAndAnswers.css";

const QuestionsAndAnswers = () => {
  const [questionsAnswers, setQuestionsAnswers] = React.useState([]);
  React.useEffect(() => {
    fetch("ques-and-ans.json")
      .then((response) => response.json())
      .then((data) => setQuestionsAnswers(data));
  }, []);
  return (
    <div>
      <Typography align="center" variant="h3" color="primary" sx={{ mt: 5 }}>
        Questions and Answers
      </Typography>
      {questionsAnswers.map((questionAnswer, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography className="ques-ans" color="primary">
              {questionAnswer["question"]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {questionAnswer["answer"].map((paragraph, index) => (
              <Typography key={index} className="ques-ans" paragraph>
                {paragraph}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default QuestionsAndAnswers;
