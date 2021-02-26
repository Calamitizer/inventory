import { createContext, useContext } from 'react';
import { Part } from './part.model';

export const PartsContext = createContext<Part[]>([]);
export const useParts = () => useContext(PartsContext);
