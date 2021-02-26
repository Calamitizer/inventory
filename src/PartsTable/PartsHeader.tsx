import React from 'react';
import {
  makeStyles,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { partsColumns, PartsColumn } from './PartsColumns';

const useStyles = makeStyles(_ => ({
  headerLabel: {
    fontWeight: 600,
    lineHeight: '1rem',
  },
}));

const PartsHeader: React.FC = () => {
  const classes = useStyles();

  const createCell = ({
    id,
    label,
    minWidth,
    align,
  }: PartsColumn) => (
    <TableCell
      key={id}
      {...{ align }}
      style={{ minWidth }}
    >
      <Typography className={classes.headerLabel}>
        {label}
      </Typography>
    </TableCell>
  );

  return (
    <TableHead>
      <TableRow>
        {partsColumns.map(createCell)}
      </TableRow>
    </TableHead>
  );
};

export default PartsHeader;
