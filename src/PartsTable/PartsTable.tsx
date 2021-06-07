import React from 'react';
import {
  fade,
  makeStyles,
  Table,
  TableBody,
  TableContainer,
} from '@material-ui/core';
import clsx from 'clsx';
import { Part } from '../state/parts/part.model';
import PartRow from './PartRow';
import PartsHeader from './PartsHeader';

interface Props {
  parts: Part[];
}

const useStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    height: '100%',
    overflowY: 'auto',
    paddingRight: spacing(4),
  },

  scrollBar: {
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-thumb': {
      background: palette.primary.main,
      borderRadius: 5,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 5,
      background: fade(palette.primary.main, 0.32),
    },
  },
}));

const PartsTable: React.FC<Props> = ({ parts }) => {
  const classes = useStyles();
  const createRow = (part: Part) => (
    <PartRow
      {...{ part }}
      key={part.id}
    />
  );

  return (
    <TableContainer className={clsx(classes.container, classes.scrollBar)}>
        <Table stickyHeader>
          <PartsHeader />

          <TableBody>
            {parts.map(createRow)}
          </TableBody>
        </Table>
    </TableContainer>
  );
};

export default PartsTable;
