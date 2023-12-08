import React, { FC, ChangeEvent } from 'react';
import { TextField, Select, Input } from '@material-ui/core';
import { TagsListType } from 'src/redux/types/notesTypes';

type FieldProps = {
  value: string;
  onChange: (value: string) => void;
  setTags?: (value: TagsListType) => void;
  title: string;
  inputType?: string;
  textarea?: boolean;
};

const Field: FC<FieldProps> = ({
  value,
  onChange,
  setTags,
  title,
  inputType,
  textarea,
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    onChange(e.target.value);

    if (setTags) {
      const tags = currentValue.match(/#[А-ЯЁа-яёA-Za-z]+/g);
      const formattedTags = [...new Set(tags)].map((tag, index) => ({
        id: index + tag + Math.random(),
        title: tag.slice(1),
      }));

      setTags(formattedTags);
    }
  };

  return (
    <TextField
      value={value}
      label={title}
      variant="outlined"
      type={textarea ? undefined : inputType ? inputType : 'text'}
      fullWidth
      multiline={textarea}
      minRows={textarea ? 4 : undefined}
      onChange={onInputChange}
    />
  );
};

export default Field;
