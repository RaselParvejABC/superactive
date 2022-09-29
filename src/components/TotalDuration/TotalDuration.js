import React from "react";
import Typography from "@mui/material/Typography";

const TotalDuration = ({ activityDuration, breakDuration }) => {
  return (
    <>
      <Typography color="primary" variant="h6" sx={{ mt: 3 }}>
        Duration Summary
      </Typography>
      <Typography>
        {`Total Active Hour(s): ${activityDuration}`}
      </Typography>
      <Typography>
        {`Break Hour(s): ${breakDuration}`}
      </Typography>
    </>
  );
};

export default TotalDuration;
