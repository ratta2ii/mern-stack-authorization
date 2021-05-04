import React from "react";
import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";

const Dashboard = (props: any) => {
  console.log(props);

  return (
    <Grid>
      <h1>Welcom to the Public Dashboard!</h1>
    </Grid>
  );
};

export default observer(Dashboard);
