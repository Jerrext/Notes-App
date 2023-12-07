import { Paper, Typography, Divider, Chip, Box, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import ButtonComponent from '../ButtonComponent';
import { ButtonTypes } from 'src/utils/@globalTypes';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

type NoteItemProps = {
  id: number;
  title: string;
  description: string;
  // tagsList: string[];
};

const NoteItem: FC<NoteItemProps> = ({ id, title, description }) => {
  const tagsList = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const onInfoBtnClick = () => {};

  const onEditBtnClick = () => {};

  const onDeleteBtnClick = () => {};

  return (
    <Paper elevation={3} style={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={12} sm={9}>
          <Typography style={{ padding: '20px' }}>{title}</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          sm={3}
          alignItems="center"
          justifyContent="space-around"
          style={{ flexWrap: 'wrap', padding: '10px 20px', gap: '10px' }}>
          <Grid item>
            <ButtonComponent
              type={ButtonTypes.DEFAULT}
              title={<InfoIcon />}
              onClick={onInfoBtnClick}
            />
          </Grid>
          <Grid item>
            <ButtonComponent
              type={ButtonTypes.PRIMARY}
              title={<EditIcon />}
              onClick={onEditBtnClick}
            />
          </Grid>
          <Grid item>
            <ButtonComponent
              type={ButtonTypes.SECONDARY}
              title={<DeleteIcon />}
              onClick={onDeleteBtnClick}
            />
          </Grid>
        </Grid>
      </Grid>

      <Divider />
      <Box style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', padding: '20px' }}>
        {tagsList.map((tag) => {
          return <Chip key={tag} label={tag} size="small" color="default" />;
        })}
      </Box>
    </Paper>
  );
};

export default NoteItem;
