import React from 'react';
import { Tooltip } from '@material-ui/core';
import { red, yellow } from '@material-ui/core/colors';
import WarningIcon from '@material-ui/icons/ReportProblemOutlined';
import ProblemIcon from '@material-ui/icons/NotInterested';
import { isStockEmpty, isStockLow } from './stock-status';

interface Props {
  stock: number;
}

const OUT_OF_STOCK = 'Out-of-stock';
const LOW_STOCK = 'Low stock';
const StockStatusBadge: React.FC<Props> = ({ stock }) => {
  if (isStockEmpty(stock)) {
    return (
      <Tooltip title={OUT_OF_STOCK} placement="right">
        <ProblemIcon
          style={{ color: red[600] }}
        />
      </Tooltip>
    );
  }

  if (isStockLow(stock)) {
    return (
      <Tooltip title={LOW_STOCK} placement="right">
        <WarningIcon
          style={{ color: yellow[800] }}
        />
      </Tooltip>
    );
  }

  return null;
};

export default StockStatusBadge;
