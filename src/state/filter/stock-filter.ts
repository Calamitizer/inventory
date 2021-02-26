import { LOW_STOCK_THRESHOLD } from "../../constants";

export enum StockFilter {
  ALL,
  LOW,
  OOS,
}

export type StockFilterMap<T> = {
  [stockFilter in StockFilter]: T;
};

export const getThreshold = (() => {
  const values: StockFilterMap<number> = {
    [StockFilter.ALL]: Infinity,
    [StockFilter.LOW]: LOW_STOCK_THRESHOLD,
    [StockFilter.OOS]: 0,
  };

  return (stockFilter: StockFilter) => values[stockFilter];
})();
