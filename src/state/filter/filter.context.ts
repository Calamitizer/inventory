import { createContext, useContext } from 'react';
import { FilterState, trivialFilterState } from './filter.state';
import { StockFilter } from './stock-filter';

interface ContextProps {
  state: FilterState;
  dispatch: {
    clearFilters: () => void;
    setNameFilter: (nameFilter: string | null) => void;
    setStockFilter: (stockFilter: StockFilter) => void;
  };
}

const trivialContextProps = (): ContextProps => ({
  state: trivialFilterState(),
  dispatch: {
    clearFilters: () => {},
    setNameFilter: (_nameFilter) => {
      console.log('default setNameFilter');
    },
    setStockFilter: (_stockFilter) => {},
  },
});

export const FilterContext = createContext<ContextProps>(trivialContextProps());
export const useFilter = () => useContext(FilterContext);
