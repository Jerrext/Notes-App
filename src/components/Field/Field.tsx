import React, { FC, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import { TagsListType } from 'src/redux/types/notesTypes';
import { FIND_TAGS_REG } from 'src/utils/constants';

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

    if (setTags) {
      const formattedValue = currentValue.replace(/\s?#/g, ' #');
      onChange(formattedValue);

      const tags = currentValue.match(FIND_TAGS_REG);
      const formattedTags = [...new Set(tags)].map((tag, index) => ({
        id: index + tag + Math.random(),
        title: tag.slice(1),
        selected: false,
      }));

      setTags(formattedTags);
    } else {
      onChange(currentValue);
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
