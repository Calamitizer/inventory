import React from 'react';
import { useParts } from '../state/parts/parts.context';
import { useFilter } from '../state/filter/filter.context';
import StatsDisplay from './StatsDisplay';

const Container: React.FC = () => {
  const parts = useParts();
  const { state: filterState } = useFilter();

  return <StatsDisplay {...{ parts, filterState }} />;
};

export default Container;
