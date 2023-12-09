import React, { FC, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Paper, Typography, Divider, Chip, Box, Grid } from '@material-ui/core';
import ButtonComponent from '../ButtonComponent';
import { ButtonTypes } from 'src/utils/@globalTypes';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { NoteType } from 'src/redux/types/notesTypes';
import { TEST_TAG_REG } from 'src/utils/constants';
import { deleteNote, setCurrentNote } from 'src/redux/actions/notesActions';

type NoteItemProps = {
  noteData: NoteType;
  setIsOpenWindow: (value: boolean) => void;
  selectedTags: string[];
};

const NoteItem: FC<NoteItemProps> = ({ noteData, setIsOpenWindow, selectedTags }) => {
  const dispatch = useDispatch();

  const onEditBtnClick = () => {
    setIsOpenWindow(true);
    dispatch(setCurrentNote(noteData));
  };

  const onDeleteBtnClick = () => {
    dispatch(deleteNote(noteData.id));
  };

  const formattedTitle = useMemo(() => {
    const formattedText = noteData.title.split(/\s?#/g).join(' #');
    const textArray = formattedText.split(' ');
    return textArray
      ? textArray.map((str, index) =>
          TEST_TAG_REG.test(str) ? (
            <React.Fragment key={index + Math.random()}>
              {' '}
              <span
                style={{
                  color: 'red',
                  backgroundColor: selectedTags.includes(str.slice(1))
                    ? 'rgba(217, 49, 30, 0.12)'
                    : '',
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
  }, [noteData, selectedTags]);

  return (
    <Paper elevation={3} style={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={12} sm={10}>
          <Typography style={{ padding: '20px' }}>{formattedTitle}</Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={2}
          alignItems="center"
          justifyContent="space-around"
          style={{ flexWrap: 'wrap', padding: '10px 20px', gap: '10px' }}>
          <Grid item>
            <ButtonComponent
              type={ButtonTypes.PRIMARY}
              title={<EditIcon />}
              onClick={onEditBtnClick}
              tooltip="Редактировать"
            />
          </Grid>
          <Grid item>
            <ButtonComponent
              type={ButtonTypes.SECONDARY}
              title={<DeleteIcon />}
              onClick={onDeleteBtnClick}
              tooltip="Удалить"
            />
          </Grid>
        </Grid>
      </Grid>

      {noteData.tags.length > 0 && (
        <>
          <Divider />
          <Box
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', padding: '20px' }}>
            {noteData.tags.map((tag) => {
              return (
                <Chip
                  key={tag.id}
                  label={tag.title}
                  size="small"
                  color={tag.selected ? 'secondary' : 'default'}
                />
              );
            })}
          </Box>
        </>
      )}
    </Paper>
  );
};

export default NoteItem;
