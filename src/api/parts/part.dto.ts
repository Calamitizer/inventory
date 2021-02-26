import { Part } from '../../state/parts/part.model';

export interface PartDto {
  // The first datum has a string ID;
  // the rest have numbers.
  id: string | number;
  name: string;
  price: string;
  instock: string;
}

export const processDto = ({
  id,
  name,
  price,
  instock,
}: PartDto): Part => ({
  id: typeof id === 'string'
    ? parseInt(id, 10)
    : id,
  name,
  price: parseFloat(price),
  stock: parseInt(instock, 10),
});
