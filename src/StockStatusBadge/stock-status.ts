import { StockFilter, getThreshold } from "../state/filter/stock-filter";

export const isStockEmpty = (stock: number) =>
  stock <= getThreshold(StockFilter.OOS);

export const isStockLow = (stock: number) =>
  stock <= getThreshold(StockFilter.LOW);
