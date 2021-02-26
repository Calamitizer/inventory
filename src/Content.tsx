import React from 'react';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import PartsTable from './PartsTable/Container';
import SidePanel from './SidePanel/SidePanel';
import image from './assets/background.jpg'; // royalty-free, I swear

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },

  container: {
    minHeight: '100vh',
    height: '100vh',
    maxHeight: '100vh',
    padding: '10vh 0',
  },

  content: {
    minHeight: '80vh',
    height: '80vh',
    maxHeight: '80vh',
    padding: spacing(2, 4),
  },

  mainContent: {
    paddingRight: spacing(4),
  },
}));

const Content: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        className={classes.container}
        maxWidth="md"
      >
        <Paper elevation={3}>
          <Grid
            className={classes.content}
            container
            direction="row"
            wrap='nowrap'
            justify="center"
            alignItems="stretch"
          >
            <Grid
              item
              className={classes.mainContent}
              style={{ flex: 3 }}
            >
              <PartsTable />
            </Grid>

            <Grid item style={{ flex: 2 }}>
              <SidePanel />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Content;
