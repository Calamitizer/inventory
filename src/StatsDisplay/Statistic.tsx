import React from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

interface Props extends TypographyProps {}

const Statistic: React.FC<Props> = props => (
  <Typography
    display="block"
    align="center"
    paragraph
    {...props}
  />
);

export default Statistic;
