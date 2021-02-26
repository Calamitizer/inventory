import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Content from './Content';
import { theme } from './theme'
import PartsProvider from './state/parts/parts.provider';
import FilterProvider from './state/filter/filter.provider';
import 'fontsource-roboto';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './util/ps-visible.css';

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <PartsProvider>
      <FilterProvider>
        <Content />
      </FilterProvider>
    </PartsProvider>
  </ThemeProvider>
)

export default App;
