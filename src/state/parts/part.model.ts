/**
 * Depending on data standards, some thought could be given
 * as to which properties may not be present. As the data in
 * this example is uniform, we'll assume all properties are
 * always present.
 */
export interface Part {
  id: number;
  name: string;
  price: number;
  stock: number;
}
