import React from "react";
import Paper from "@mui/material/Paper";
import Person from "../Person/Person";

const ActivityBasket = ({ activities, selectedIDs }) => {
  return (
    <Paper>
      <Person
        image="/images/me.jpg"
        name="Muhammad Rasel Parvej"
        location="Cumilla, Bangladesh"
        height="5'8''"
        weight="500"
        age="1000"
      ></Person>

    </Paper>
  );
};

export default ActivityBasket;
