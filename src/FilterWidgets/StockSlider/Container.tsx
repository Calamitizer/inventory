import React from 'react';
import StockSlider from './StockSlider';
import { useFilter } from '../../state/filter/filter.context';

const Container: React.FC = () => {
  const {
    state: { stockFilter },
    dispatch: { setStockFilter },
  } = useFilter();

  return (
    <StockSlider
      {...{
        stockFilter,
        setStockFilter,
      }}
    />
  );
};

export default Container;
