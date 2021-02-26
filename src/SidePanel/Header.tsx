import React from 'react';
import { Divider, makeStyles, Typography } from '@material-ui/core';

interface Props {
  label: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    padding: spacing(1),
  },
  gutterTop: {
    marginTop: '0.35em',
  },
}));

const Header: React.FC<Props> = ({ label }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Divider variant='fullWidth' />
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.gutterTop}
      >
        {label}
      </Typography>
      <Divider variant='fullWidth' />
    </div>
  );
};

export default Header;
