import React from 'react';
import { $enum } from 'ts-enum-util';
import { Grid, makeStyles, Paper, Slider, Typography } from '@material-ui/core';
import { StockFilter } from '../../state/filter/stock-filter';
import { getMarks, getSliderValue } from './slider-marks';

const useStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    padding: spacing(0, 2),
  },

  sliderFrame: {
    padding: spacing(),
    width: '100%',
  },

  sliderRoot: {
    color: palette.primary.main,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -10,
    marginLeft: -12,
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
  mark: {
    backgroundColor: palette.primary.main,
    height: 12,
    width: 4,
    borderRadius: 4,
    marginTop: -4,
    marginLeft: -2,
  },
  markLabel: {
    marginTop: 4,
  },
}));

interface Props {
  stockFilter: StockFilter;
  setStockFilter: (stockFilter: StockFilter) => void;
}

const LABEL = 'Filter by stock';
const marks = getMarks();
const StockSlider: React.FC<Props> = ({ stockFilter, setStockFilter }) => {
  const classes = useStyles();

  const toStockFilter = (value: number) => $enum(StockFilter)
    .getValues()
    .find(stockFilter => getSliderValue(stockFilter) === value)!;

  const onChange = (_: object, value: number | number[]) => {
    // MUI can't discriminate that this isn't a ranged
    // slider, so we have to typecast manually
    const newStockFilter = toStockFilter(value as number);
    if (newStockFilter !== stockFilter) {
      setStockFilter(toStockFilter(value as number));
    }
  };

  return (
    <Paper className={classes.container} elevation={2}>
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            {LABEL}
          </Typography>
        </Grid>

        <Grid item style={{ width: '100%' }}>
          <Slider
            value={getSliderValue(stockFilter)}
            {...{ marks }}
            step={null}
            {...{ onChange }}
            classes={{
              root: classes.sliderRoot,
              thumb: classes.thumb,
              active: classes.active,
              valueLabel: classes.valueLabel,
              track: classes.track,
              rail: classes.rail,
              mark: classes.mark,
              markLabel: classes.markLabel,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StockSlider;
