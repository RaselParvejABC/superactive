import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import Activity from "../Activity/Activity";

const Activities = ({
  activities,
  selectedIDs,
  addToSelection,
  removeFromSelection,
}) => {
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: "fontWeightBold" }}
      >
        <AirplanemodeActiveIcon /> SuperActive
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {activities.map((activity) => (
          <Activity
            activity={activity}
            selectedIDs={selectedIDs}
            addToSelection={addToSelection}
            removeFromSelection={removeFromSelection}
            key={activity["id"]}
          ></Activity>
        ))}
      </Grid>
    </>
  );
};

export default Activities;
