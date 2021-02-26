import { $enum } from 'ts-enum-util';
import { getThreshold, StockFilter, StockFilterMap } from '../../state/filter/stock-filter';

export const getSliderValue = (() => {
  const values: StockFilterMap<number> = {
    [StockFilter.ALL]: 100,
    [StockFilter.LOW]: 100 / 3,
    [StockFilter.OOS]: 0,
  };

  return (stockFilter: StockFilter) => values[stockFilter];
})();

export const getSliderLabel = (() => {
  const labels: StockFilterMap<string> = {
    [StockFilter.ALL]: 'All',
    [StockFilter.LOW]: `Low (≤${getThreshold(StockFilter.LOW)})`,
    [StockFilter.OOS]: 'OOS',
  };

  return (stockFilter: StockFilter) => labels[stockFilter];
})();

export const getMarks = () => $enum(StockFilter)
  .getValues()
  .map(stockFilter => ({
    value: getSliderValue(stockFilter),
    label: getSliderLabel(stockFilter),
  }));
