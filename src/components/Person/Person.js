import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Person = ({ image, name, location }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 3, p: 1 }}>
      <Grid item>
        <Avatar alt="Person" src={image} />
      </Grid>
      <Grid item>
        <Stack>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="subtitle2">{location}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Person;
