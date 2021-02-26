import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { fade, makeStyles, TextField } from '@material-ui/core';

interface Props {
  names?: string[];
  nameFilter: string | null;
  setNameFilter: (nameFilter: string | null) => void;
}

const useStyles = makeStyles(({ palette }) => ({
  option: {
    '&[data-focus="true"]': {
      backgroundColor: fade(palette.primary.light, 0.32),
    },
  },
}));

const LABEL = 'Search by part name';
const NameSearch: React.FC<Props> = ({
  names = [],
  nameFilter,
  setNameFilter,
}) => {
  const classes = useStyles();

  const onInputChange = (_: object, name: string) => {
    setNameFilter(name || null);
  };

  const getOptionSelected = (_: string) => false;

  return (
    <div>
      <Autocomplete
        freeSolo
        options={names}
        inputValue={nameFilter || ''}
        {...{
          onInputChange,
          getOptionSelected,
        }}
        renderInput={params => (
          <TextField
            {...params}
            {...{ label: LABEL }}
            variant="outlined"
          />
        )}
        classes={{ option: classes.option}}
      />
    </div>
  );
};

export default NameSearch;
