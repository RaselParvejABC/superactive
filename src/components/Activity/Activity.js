import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const Activity = ({ activity, selectedIDs, addToSelection, removeFromSelection }) => {


  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ p: 3 }}>
        <CardMedia
          component="img"
          image={activity.thumbnail}
          alt="Activity Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {activity.name}
          </Typography>
          <Typography gutterBottom variant="body" component="div">
            {`Duration: ${activity.duration} Hours`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
            onClick={() => addToSelection(activity.id)}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="warning"
            startIcon={<DeleteIcon />}
            onClick={() => removeFromSelection(activity.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Activity;
