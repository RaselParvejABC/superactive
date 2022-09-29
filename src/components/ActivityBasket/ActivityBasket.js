import React from "react";
import Paper from "@mui/material/Paper";
import Person from "../Person/Person";
import BreakDurationChooser from "../BreakDurationChooser/BreakDurationChooser";
import TotalDuration from "../TotalDuration/TotalDuration";
import {
  getBreakDurationFromStorage,
  setBreakDurationToStorage,
} from "../../business-logic/LocalStorage";

const ActivityBasket = ({ activities, selectedIDs }) => {
  const [breakDuration, setBreakDuration] = React.useState(0);

  const onNewDurationChoose = (newDuration) => {
    setBreakDurationToStorage(newDuration);
    setBreakDuration(newDuration);
  };

  const calculateActivityDuration = () => {
    let totalHours = 0;

    console.log(Object.keys(selectedIDs));

    return totalHours;
  };

  React.useEffect(() => {
    setBreakDuration(getBreakDurationFromStorage());
  }, []);

  return (
    <Paper sx={{ p: 3 }}>
      <Person
        image="/images/me.jpg"
        name="Rasel Parvej"
        location="Cumilla, Bangladesh"
        height="5'8''"
        weight="500"
        age="1000"
      ></Person>

      <BreakDurationChooser
        breakDuration={breakDuration}
        onNewDurationChoose={onNewDurationChoose}
      ></BreakDurationChooser>

      <TotalDuration
        activityDuration={calculateActivityDuration()}
        breakDuration={breakDuration}
      ></TotalDuration>
    </Paper>
  );
};

export default ActivityBasket;
