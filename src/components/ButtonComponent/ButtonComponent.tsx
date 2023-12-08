import React, { FC, ChangeEvent, ReactNode } from 'react';
import { Button, TextField } from '@material-ui/core';
import { ButtonTypes } from 'src/utils/@globalTypes';

type ButtonComponentProps = {
  onClick: () => void;
  title: string | ReactNode;
  type: ButtonTypes;
};

const ButtonComponent: FC<ButtonComponentProps> = ({ onClick, title, type }) => {
  return (
    <Button variant="contained" color={type} onClick={onClick} size="large" fullWidth>
      {title}
    </Button>
  );
};

export default ButtonComponent;
