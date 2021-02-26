import React from 'react';
import NameSearch from './NameSearch';
import { useParts } from '../../state/parts/parts.context';
import { useFilter } from '../../state/filter/filter.context';

const Container: React.FC = () => {
  const names = useParts()
    .map(({ name }) => name)
    .sort();
  const {
    state: { nameFilter },
    dispatch: { setNameFilter },
  } = useFilter();

  return (
    <NameSearch
      {...{
        names,
        nameFilter,
        setNameFilter,
      }}
      />
  );
};

export default Container;
