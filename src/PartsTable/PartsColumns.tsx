import React, { ReactNode } from 'react';
import { Part } from "../state/parts/part.model";
import StockStatusBadge from '../StockStatusBadge/StockStatusBadge';

type PartsColumnId =
  | 'id'
  | 'name'
  | 'price'
  | 'stock'
  | 'stockStatus';

export interface PartsColumn {
  id: PartsColumnId;
  accessor: (part: Part) => ReactNode
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
}

export const partsColumns: PartsColumn[] = [
  {
    id: 'id',
    accessor: ({ id }) => id,
    label: 'ID',
    minWidth: 20,
    align: 'right',
  },
  {
    id: 'name',
    accessor: ({ name }) => name,
    label: 'Part Name',
    minWidth: 160,
  },
  {
    id: 'price',
    accessor: ({ price }) => `$${price.toFixed(2)}`,
    label: 'Price (USD)',
    minWidth: 80,
    align: 'right',
  },
  {
    id: 'stock',
    accessor: ({ stock }) => stock.toLocaleString(),
    label: 'Stock',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'stockStatus',
    accessor: ({ stock }) => (<StockStatusBadge {...{ stock }} />),
    label: '',
    minWidth: 10,
    align: 'center',
  },
];
