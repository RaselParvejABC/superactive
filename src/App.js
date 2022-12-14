import React from "react";
import Grid from "@mui/material/Grid";
import Activities from "./components/Activities/Activities";
import ActivityBasket from "./components/ActivityBasket/ActivityBasket";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers/QuestionsAndAnswers";
import {
  getSelectionFromStorage,
  setSelectionToStorage,
} from "./business-logic/LocalStorage";

const App = () => {
  const [activities, setActivities] = React.useState([]);
  const [selectedIDs, setSelectedIDs] = React.useState({});

  const removeFromSelection = (id) => {
    const selection = { ...selectedIDs };
    if (!selection[id]) {
      return;
    }

    selection[id] = selection[id] - 1;

    if (selection[id] === 0) {
      delete selection[id];
    }
    setSelectionToStorage(selection);
    setSelectedIDs(selection);
  };

  const addToSelection = (id) => {
    const selection = { ...selectedIDs };
    if (!selection[id]) {
      selection[id] = 0;
    }
    selection[id] = selection[id] + 1;
    setSelectionToStorage(selection);
    setSelectedIDs(selection);
  };

  const onActivitiesCompleted = () => {
    localStorage.clear();
    setSelectedIDs({});
  };

  React.useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch("activities.json");
      const responseBody = await response.json();
      setActivities(responseBody);
    };
    fetchActivities();
  }, []);

  React.useEffect(() => {
    setSelectedIDs(getSelectionFromStorage());
  }, [activities]);

  return (
    <Grid container spacing={2} p={5}>
      <Grid item xs={12} md={8} lg={9}>
        <Activities
          activities={activities}
          selectedIDs={selectedIDs}
          addToSelection={addToSelection}
          removeFromSelection={removeFromSelection}
        ></Activities>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <ActivityBasket
          activities={activities}
          selectedIDs={selectedIDs}
          onActivitiesCompleted={onActivitiesCompleted}
        ></ActivityBasket>
      </Grid>
      <Grid item xs={12} md={12} lg={9}>
        <QuestionsAndAnswers></QuestionsAndAnswers>
      </Grid>
    </Grid>
  );
};

export default App;
