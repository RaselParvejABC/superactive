import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const BreakDurationChooser = ({ breakDuration, onNewDurationChoose }) => {
  return (
    <>
      <Typography color="primary" variant="h6" sx={{ mt: 3 }}>
        Choose Break Hours
      </Typography>
      {[0, 1, 2, 3, 4, 5].map((duration) => (
        <Chip
          label={`${duration} Hours`}
          color={breakDuration === duration ? "primary" : "default"}
          key={duration}
          sx={{ m: 1 }}
          onClick={() => onNewDurationChoose(duration)}
        ></Chip>
      ))}
    </>
  );
};

export default BreakDurationChooser;
