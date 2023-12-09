import React, { FC, ChangeEvent } from 'react';
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Chip,
  FormControl,
  InputLabel,
} from '@material-ui/core';

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
              <Chip key={option} label={option} size="small" />
            ))}
          </div>
        )}>
        {optionsList.length > 0 ? (
          optionsList.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={value.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled value="">
            <em>Список тегов пуст</em>
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
