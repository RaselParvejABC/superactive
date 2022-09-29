import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const boldStyle = {
  fontWeight: "fontWeightBold",
};

const Person = ({ image, name, location, height, weight, age }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 3, p: 1 }}>
      <Grid item>
        <Avatar alt="Person" src={image} />
      </Grid>
      <Grid item md={8}>
        <Stack>
          <Typography color="primary" variant="subtitle1" sx={boldStyle}>
            {name}
          </Typography>
          <Typography variant="subtitle2">{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography
          color="primary"
          variant="subtitle1"
          sx={boldStyle}
        >{`Age: ${age} Years`}</Typography>
        <Typography
          color="primary"
          variant="subtitle1"
          sx={boldStyle}
        >{`Height: ${height}`}</Typography>
        <Typography
          color="primary"
          variant="subtitle1"
          sx={boldStyle}
        >{`Age: ${weight} KG`}</Typography>
      </Grid>
    </Grid>
  );
};

export default Person;
