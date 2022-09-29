import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Activity = ({
  activity,
  selectedIDs,
  addToSelection,
  removeFromSelection,
}) => {
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

          {selectedIDs[activity.id] && (
            <Typography gutterBottom variant="body" component="div">
              {`${selectedIDs[activity.id]} Times in Basket`}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToSelection(activity.id)}
              >
                <AddCircleIcon />
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="warning"
                onClick={() => removeFromSelection(activity.id)}
              >
                <RemoveCircleIcon />
              </Button>
            </Box>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Activity;
