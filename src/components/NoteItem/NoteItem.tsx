import React, { FC, useEffect, useMemo } from 'react';
import reactStringReplace from 'react-string-replace';
import {
  Paper,
  Typography,
  Divider,
  Chip,
  Box,
  Grid,
  TextField,
} from '@material-ui/core';
import ButtonComponent from '../ButtonComponent';
import { ButtonTypes } from 'src/utils/@globalTypes';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import { TagsListType } from 'src/redux/types/notesTypes';
import { FIND_TAGS_REG, TEST_TAG_REG } from 'src/utils/constants';

type NoteItemProps = {
  id: number;
  title: string;
  tagsList: TagsListType;
};

const NoteItem: FC<NoteItemProps> = ({ id, title, tagsList }) => {
  const onInfoBtnClick = () => {};

  const onEditBtnClick = () => {};

  const onDeleteBtnClick = () => {};

  const formattedTitle = useMemo(() => {
    const formattedText = title.split(/\s?#/g).join(' #');
    const textArray = formattedText.split(' ');
    return textArray
      ? textArray.map((str, index) =>
          TEST_TAG_REG.test(str) ? (
            <React.Fragment key={index + Math.random()}>
              {' '}
              <span
                style={{
                  color: 'red',
                  backgroundColor: false ? 'rgba(217, 49, 30, 0.12)' : '',
                  padding: '2px',
                  borderRadius: '3px',
                }}>
                {str}
              </span>
            </React.Fragment>
          ) : (
            ` ${str}`
          ),
        )
      : [];
  }, [title]);

  useEffect(() => {
    // console.log(formattedTitle);
  }, [formattedTitle]);

  return (
    <Paper elevation={3} style={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={12} sm={9}>
          <Typography style={{ padding: '20px' }}>{formattedTitle}</Typography>
        </Grid>
        <Grid
          container
          item
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

      {tagsList.length > 0 && (
        <>
          <Divider />
          <Box
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', padding: '20px' }}>
            {tagsList.map((tag) => {
              return <Chip key={tag.id} label={tag.title} size="small" color="default" />;
            })}
          </Box>
        </>
      )}
    </Paper>
  );
};

export default NoteItem;
