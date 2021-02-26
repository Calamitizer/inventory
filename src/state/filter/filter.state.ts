import { StockFilter } from './stock-filter';

export interface FilterState {
  nameFilter: string | null;
  stockFilter: StockFilter;
}

export const trivialFilterState = (): FilterState => ({
  nameFilter: null,
  stockFilter: StockFilter.ALL,
});
