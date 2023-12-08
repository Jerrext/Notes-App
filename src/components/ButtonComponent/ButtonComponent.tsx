import React, { FC, ReactNode } from 'react';
import { Button, Tooltip } from '@material-ui/core';
import { ButtonTypes } from 'src/utils/@globalTypes';

type ButtonComponentProps = {
  onClick: () => void;
  title: string | ReactNode;
  type: ButtonTypes;
  tooltip: string;
  disabled?: boolean;
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  onClick,
  title,
  type,
  tooltip,
  disabled,
}) => {
  return (
    <Tooltip title={tooltip}>
      <span>
        <Button
          variant="contained"
          color={type}
          onClick={onClick}
          size="large"
          fullWidth
          disabled={disabled}>
          {title}
        </Button>
      </span>
    </Tooltip>
  );
};

export default ButtonComponent;
