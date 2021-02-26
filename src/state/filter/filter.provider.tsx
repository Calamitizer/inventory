import React, { useReducer } from 'react';
import { FilterActionType } from './filter.actions';
import { FilterContext } from './filter.context';
import { filterReducer } from './filter.reducer';
import { trivialFilterState } from './filter.state';
import { StockFilter } from './stock-filter';

const FilterProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, trivialFilterState());

  const clearFilters = () => {
    dispatch({ type: FilterActionType.CLEAR });
  };

  const setNameFilter = (nameFilter: string | null) => {
    dispatch({ type: FilterActionType.SET_NAME, nameFilter });
  };

  const setStockFilter = (stockFilter: StockFilter) => {
    dispatch({ type: FilterActionType.SET_STOCK, stockFilter });
  };

  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch: {
          clearFilters,
          setNameFilter,
          setStockFilter,
        },
      }}>
        {children}
      </FilterContext.Provider>
  );
};

export default FilterProvider;
