import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Chip,
} from '@material-ui/core';
import ButtonComponent from '../ButtonComponent';
import { ButtonTypes, ModalWindowTypes } from 'src/utils/@globalTypes';
import Field from '../Field';
import { TagsListType } from 'src/redux/types/notesTypes';
import { createNote } from 'src/redux/actions/notesActions';

type ModalWindowProps = {
  modalWindowType: ModalWindowTypes;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const ModalWindow: FC<ModalWindowProps> = ({ modalWindowType, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const [noteTitle, setNoteTitle] = useState('');
  const [tagsList, setTagsList] = useState<TagsListType>([]);

  // const modalWindowData = () => {
  //   switch (modalWindowType) {
  //     case ModalWindowTypes.CREATE_NOTE:
  //       return { title: 'Создание заметки' };
  //     default:
  //       return;
  //   }
  // };

  const onCreateBtnClick = () => {
    dispatch(
      createNote({
        data: { title: noteTitle, tags: tagsList },
        callback: onCloseBtnClick,
      }),
    );
  };

  const onCloseBtnClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      fullWidth
      open={isOpen}
      onClose={onCloseBtnClick}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Создание заметки</DialogTitle>
      <DialogContent>
        <Field
          title="Заметка"
          value={noteTitle}
          onChange={setNoteTitle}
          textarea
          setTags={setTagsList}
        />
        <Grid container spacing={1} style={{ marginTop: '5px' }}>
          {tagsList.map((tag) => (
            <Grid item key={tag.id}>
              <Chip label={tag.title} size="small" color="secondary" />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <ButtonComponent
          title="Создать"
          type={ButtonTypes.PRIMARY}
          onClick={onCreateBtnClick}
        />
        <ButtonComponent
          title="Закрыть"
          type={ButtonTypes.DEFAULT}
          onClick={onCloseBtnClick}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
