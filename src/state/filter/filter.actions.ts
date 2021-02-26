import { StockFilter } from './stock-filter';

export enum FilterActionType {
  CLEAR,
  SET_NAME,
  SET_STOCK,
}

export type FilterAction =
  | { type: FilterActionType.CLEAR }
  | {
    type: FilterActionType.SET_NAME,
    nameFilter: string | null,
    }
  | {
    type: FilterActionType.SET_STOCK,
    stockFilter: StockFilter,
    };
