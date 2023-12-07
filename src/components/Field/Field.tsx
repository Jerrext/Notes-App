import React, { FC, ChangeEvent } from 'react';
import { TextField, Select, Input } from '@material-ui/core';
import { InputTypes } from 'src/utils/@globalTypes';

type FieldProps = {
  value: string;
  onChange: (value: string) => void;
  title: string;
  inputType?: string;
  type: InputTypes;
};

const Field: FC<FieldProps> = ({ value, onChange, title, inputType, type }) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return type === InputTypes.INPUT ? (
    <TextField
      value={value}
      // id="standard-full-width"
      label={title}
      variant="outlined"
      type={inputType ? inputType : 'text'}
      fullWidth
      onChange={onInputChange}
    />
  ) : type === InputTypes.TEXTAREA ? (
    <div></div>
  ) : null;
};

export default Field;
