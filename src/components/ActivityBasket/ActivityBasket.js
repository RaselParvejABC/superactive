import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Person from "../Person/Person";
import BreakDurationChooser from "../BreakDurationChooser/BreakDurationChooser";
import TotalDuration from "../TotalDuration/TotalDuration";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  getBreakDurationFromStorage,
  setBreakDurationToStorage,
} from "../../business-logic/LocalStorage";

const ActivityBasket = ({ activities, selectedIDs, onActivitiesCompleted }) => {
  const [breakDuration, setBreakDuration] = React.useState(0);
  const [toastOpen, setToastOpen] = React.useState(false);

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
    <Paper sx={{ p: 3, position: { lg: "fixed" } }}>
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
        onClick={() => {
          setBreakDuration(0);
          setToastOpen(true);
          onActivitiesCompleted();
        }}
      >
        Activities Completed
      </Button>

      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={toastOpen}
        autoHideDuration={5000}
        onClose={() => setToastOpen(false)}
      >
        <div>
          <Typography align="center">
            <ThumbUpIcon color="info" sx={{ fontSize: "50px" }} />
          </Typography>
          <Alert severity="success" sx={{ width: "100%" }}>
            Well Done! Activity Basket Emptied!
          </Alert>
        </div>
      </Snackbar>
    </Paper>
  );
};

export default ActivityBasket;
