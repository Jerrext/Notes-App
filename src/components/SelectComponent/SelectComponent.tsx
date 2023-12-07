import React, { FC, ChangeEvent } from 'react';
import {
  Button,
  Input,
  Select,
  TextField,
  MenuItem,
  Checkbox,
  ListItemText,
  Chip,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { ButtonTypes, InputTypes } from 'src/utils/@globalTypes';

type SelectComponentProps = {
  id: string;
  labelId: string;
  value: string[];
  onChange: (value: string[]) => void;
  title: string;
  optionsList: string[];
};

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 400,
      width: 250,
      // top: 200,
    },
  },
};

const SelectComponent: FC<SelectComponentProps> = ({
  id,
  labelId,
  value,
  onChange,
  title,
  optionsList,
}) => {
  const onSelectChange = (e: ChangeEvent<{ value: unknown }>) => {
    onChange(e.target.value as string[]);
  };
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={labelId}>{title}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        multiple
        onChange={onSelectChange}
        label={title}
        MenuProps={MenuProps}
        renderValue={(selected) => (
          <div
            style={{
              columnGap: '8px',
              rowGap: '5px',
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            {(selected as string[]).map((option) => (
              <Chip key={option} label={option} />
            ))}
          </div>
        )}>
        {optionsList.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={value.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
