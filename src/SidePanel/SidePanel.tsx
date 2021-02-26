import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import FilterWidgets from '../FilterWidgets/FilterWidgets';
import StatsDisplay from '../StatsDisplay/Container';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    paddingLeft: spacing(3),
  },
}));

const SidePanel: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
      style={{ height: '100%' }}
    >
      <Grid
        item
        style={{ flex: 1 }}
        container
        direction="column"
        justify="center"
      >
        <Grid item style={{ height: '100%' }}>
          <FilterWidgets />
        </Grid>
      </Grid>

      <Grid item style={{ flex: 1 }}>
        <StatsDisplay />
      </Grid>
    </Grid>
  );
};

export default SidePanel;
