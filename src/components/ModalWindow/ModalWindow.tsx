import React, { FC, useState, useEffect } from 'react';
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
import { ButtonTypes } from 'src/utils/@globalTypes';
import Field from '../Field';
import { NoteType, TagsListType } from 'src/redux/types/notesTypes';
import { createNote, setCurrentNote, updateNote } from 'src/redux/actions/notesActions';

type ModalWindowProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  // isEditWindow?: boolean;
  noteData: NoteType | null;
};

const ModalWindow: FC<ModalWindowProps> = ({
  // isEditWindow,
  isOpen,
  setIsOpen,
  noteData,
}) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [tagsList, setTagsList] = useState<TagsListType>([]);

  // const [defaultValue, setDefaultValue] = useState('');

  // const modalWindowData = () => {
  //   switch (modalWindowType) {
  //     case ModalWindowTypes.CREATE_NOTE:
  //       return { title: 'Создание заметки' };
  //     default:
  //       return;
  //   }
  // };

  const onCreateBtnClick = () => {
    value.length > 0 &&
      dispatch(
        createNote({
          data: { title: value, tags: tagsList },
          callback: onCloseBtnClick,
        }),
      );
  };

  const onSaveBtnClick = () => {
    value.length > 0 &&
      noteData &&
      dispatch(
        updateNote({
          data: { id: noteData.id, title: value, tags: tagsList },
          callback: onCloseBtnClick,
        }),
      );
  };

  const onCloseBtnClick = () => {
    setIsOpen(false);
    if (noteData) {
      setValue(noteData.title);
      setTagsList(noteData.tags);
    } else {
      setValue('');
      setTagsList([]);
    }
  };

  useEffect(() => {
    if (noteData) {
      setValue(noteData.title);
      setTagsList(noteData.tags);
    } else {
      setValue('');
      setTagsList([]);
    }
  }, [noteData]);

  return (
    <Dialog
      fullWidth
      open={isOpen}
      onClose={onCloseBtnClick}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {noteData ? 'Редактирование заметки' : 'Создание заметки'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Что бы добавить тег, воспользуйтесь символом "#".
        </DialogContentText>
        <Field
          title="Заметка"
          value={value}
          onChange={setValue}
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
          title={noteData ? 'Сохранить' : 'Создать'}
          type={ButtonTypes.PRIMARY}
          onClick={noteData ? onSaveBtnClick : onCreateBtnClick}
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
