import React from 'react';
import { useFilter } from '../state/filter/filter.context';
import { useParts } from '../state/parts/parts.context';
import { createMatcher } from '../util/filter-parts';
import PartsTable from './PartsTable';

const Container: React.FC = () => {
  const { state: filterState } = useFilter();
  const parts = useParts().filter(createMatcher(filterState));

  return <PartsTable {...{ parts }} />;
};

export default Container
