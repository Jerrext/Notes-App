import React, { FC } from 'react';
import { NoContentIcon } from '../../assets/icons';
import { Grid, Typography } from '@material-ui/core';

type EmptyStateProps = {
  title: string;
  description: string;
};

const EmptyState: FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <Grid container spacing={1} alignItems="center" style={{ flexDirection: 'column' }}>
      <Grid item>
        <NoContentIcon />
      </Grid>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default EmptyState;
