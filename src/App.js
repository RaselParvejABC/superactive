import React from "react";

const App = () => {
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch("activities.json");
      const responseBody = await response.json();
      setActivities(responseBody);
    };
    fetchActivities();
  }, []);

  React.useEffect(() => {
    
  }, [activities]);

  return <div>{activities.length}</div>;
};

export default App;
