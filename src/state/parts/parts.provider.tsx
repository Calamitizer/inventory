import React, { useEffect, useState } from 'react';
import { Part } from './part.model';
import { PartsContext } from './parts.context';
import PartsClient from '../../api/parts/parts.client';

const PartsProvider: React.FC = ({ children }) => {
  const [parts, setParts] = useState<Part[]>([]);
  const client = new PartsClient();

  useEffect(() => {
    const fetchParts = async () => {
      const results = await client.getAll();
      setParts(results === null ? [] : results);
    };

    fetchParts();
  }, []);

  return (
    <PartsContext.Provider value={parts}>
      {children}
    </PartsContext.Provider>
  );
};

export default PartsProvider;
