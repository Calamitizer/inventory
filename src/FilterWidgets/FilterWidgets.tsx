import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../SidePanel/Header';
import NameSearch from './NameSearch/Container';
import StockSlider from './StockSlider/Container';

const HEADER_LABEL = 'Filter Options';
const FilterWidgets: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
      style={{ height: '100%' }}
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
        <Grid
          item
          container
          direction="column"
          justify="center"
        >
          <Grid item>
            <NameSearch />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justify="center"
        >
          <Grid item>
            <StockSlider />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterWidgets;
