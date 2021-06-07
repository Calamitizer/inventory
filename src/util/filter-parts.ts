import { Part } from '../state/parts/part.model';
import { FilterState } from '../state/filter/filter.state';
import { getThreshold, StockFilter } from '../state/filter/stock-filter';

/**
 * Logic for matching `FilterState` settings against individual parts.
 */

/** Returns whether the part matches *all* active filters. */
export const createMatcher = ({ nameFilter, stockFilter }: FilterState) =>
  ({ name, stock }: Part) => ![
    nameMatches(name, nameFilter),
    stockMatches(stock, stockFilter),
  ].includes(false);

/**
 * Matching functions for individual filter properties, aggregated above.
 */

export const nameMatches = (name: string, nameFilter: string | null) =>
  nameFilter === null ||
  name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase());

export const stockMatches = (stock: number, stockFilter: StockFilter) =>
  stock <= getThreshold(stockFilter);
