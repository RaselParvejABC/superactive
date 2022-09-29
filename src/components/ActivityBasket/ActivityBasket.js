import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Person from "../Person/Person";
import BreakDurationChooser from "../BreakDurationChooser/BreakDurationChooser";
import TotalDuration from "../TotalDuration/TotalDuration";
import {
  getBreakDurationFromStorage,
  setBreakDurationToStorage,
} from "../../business-logic/LocalStorage";

const ActivityBasket = ({ activities, selectedIDs, onActivitiesCompleted }) => {
  const [breakDuration, setBreakDuration] = React.useState(0);

  const onNewDurationChoose = (newDuration) => {
    setBreakDurationToStorage(newDuration);
    setBreakDuration(newDuration);
  };

  const calculateActivityDuration = () => {
    const selectedIDsArray = Object.keys(selectedIDs).map((id) => Number(id));

    return selectedIDsArray.reduce((previous, id) => {
      const activity = activities[id - 1];
      if (activity && activity.duration) {
        return previous + Number(activity.duration) * selectedIDs[id];
      }
      return previous;
    }, 0);
  };

  React.useEffect(() => {
    setBreakDuration(getBreakDurationFromStorage());
  }, []);

  return (
    <Paper sx={{ p: 3, position: { md: "fixed" } }}>
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

      <Button
        fullWidth
        color="success"
        variant="contained"
        sx={{ mt: 3 }}
        onClick={onActivitiesCompleted}
      >
        Activities Completed
      </Button>
    </Paper>
  );
};

export default ActivityBasket;
