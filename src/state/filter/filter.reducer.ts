import { Reducer } from 'react';
import { FilterState, trivialFilterState } from './filter.state';
import { FilterAction, FilterActionType } from './filter.actions';

export type FilterReducer = Reducer<FilterState, FilterAction>;

export const filterReducer: FilterReducer = (state, action) => {
  switch (action.type) {
    case FilterActionType.CLEAR:
      return trivialFilterState();

    case FilterActionType.SET_NAME:
      return {
        ...state,
        nameFilter: action.nameFilter,
      };

    case FilterActionType.SET_STOCK:
      console.log(`setStockFilter(${action.stockFilter})`);
      return {
        ...state,
        stockFilter: action.stockFilter,
      };

    default:
      return state;
  }
};
