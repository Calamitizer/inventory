import React from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import { FilterState } from '../state/filter/filter.state';
import { Part } from '../state/parts/part.model';
import { isStockEmpty, isStockLow } from '../StockStatusBadge/stock-status';
import { createMatcher } from '../util/filter-parts';
import Header from '../SidePanel/Header';
import { pluralizeParts } from '../util/pluralize';
import Statistic from './Statistic';

interface Props {
  parts: Part[];
  filterState: FilterState;
}

const useStyles = makeStyles(_ => ({
  container: {
    height: '100%',
  },
}));

const HEADER_LABEL = 'Statistics';
const StatsDisplay: React.FC<Props> = ({ parts, filterState }) => {
  const classes = useStyles();

  const partsCount = parts.length;
  const displayedPartsCount = parts
    .filter(createMatcher(filterState))
    .length

  const emptyStockCount = parts
    .filter(({ stock }) => isStockEmpty(stock))
    .length

  const lowStockCount = parts
    .filter(({ stock }) => !isStockEmpty(stock) && isStockLow(stock))
    .length

  const grossValue = parts
    .map(({ price, stock }) => price * stock)
    .reduce((sum, nextValue) => sum + nextValue, 0)
    .toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
    >
      <Grid item>
        <Header label={HEADER_LABEL} />
      </Grid>

      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        style={{ flex: 1 }}
      >

        <Grid item>
          <Statistic>
            {`Displaying ${displayedPartsCount} of ${pluralizeParts(partsCount)}`}
          </Statistic>
          <Statistic>
            {`${pluralizeParts(lowStockCount)} with low stock`}
          </Statistic>
          <Statistic>
            {`${pluralizeParts(emptyStockCount)} out-of-stock`}
          </Statistic>
        </Grid>

        <Divider variant="middle"/>

        <Grid item>
          <Statistic paragraph={false}>
            {`Gross value: $${grossValue}`}
          </Statistic>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StatsDisplay;
