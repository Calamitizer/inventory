import React from 'react';
import clsx from 'clsx';
import { makeStyles, TableCell, TableRow } from '@material-ui/core';
import { Part } from '../state/parts/part.model';
import { partsColumns, PartsColumn } from './PartsColumns';

interface Props {
  part: Part;
}

const useStyles = makeStyles(({ spacing }) => ({
  badgeCell: {
    padding: spacing(0),
    paddingTop: 4,
  },
}));

const PartRow: React.FC<Props> = ({part}) => {
  const classes = useStyles();

  const createCell = ({
    id,
    accessor,
    align,
  }: PartsColumn) => (
    <TableCell
      className={clsx({ [classes.badgeCell]: id === 'stockStatus' })}
      key={id}
      {...{ align }}
    >
      {accessor(part)}
    </TableCell>
  );

  return (
    <TableRow>
      {partsColumns.map(createCell)}
    </TableRow>
  );
};

export default PartRow;
