import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Container, Typography, Paper, CircularProgress } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { ButtonTypes } from './utils/@globalTypes';
import Field from './components/Field';
import ButtonComponent from './components/ButtonComponent';
import SelectComponent from './components/SelectComponent';
import NoteItem from './components/NoteItem';
import { useTypedSelector } from './utils/hooks';
import { NotesSelectors } from './redux/selectors/selectors';
import {
  getNotesList,
  setCurrentNote,
  setFilteredNotesList,
  setIsSearched,
} from './redux/actions/notesActions';
import EmptyState from './components/EmptyState';
import ModalWindow from './components/ModalWindow';
import { NotesListType } from './redux/types/notesTypes';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useTypedSelector(NotesSelectors.getIsLoading);
  const notesList = useTypedSelector(NotesSelectors.getNotesList);
  const searchedNotesList = useTypedSelector(NotesSelectors.getSearchedNotesList);
  const currentNote = useTypedSelector(NotesSelectors.getCurrentNote);
  const isSearched = useTypedSelector(NotesSelectors.getIsSearched);
  const tagOptions = useTypedSelector(NotesSelectors.getTagOptions);

  const [searchValue, setSearchValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [currentNotesList, setCurrentNotesList] = useState<NotesListType>([]);

  const onClearFiltersBtnClick = () => {
    setSearchValue('');
    setTags([]);
  };

  const onCreateNoteBtnClick = () => {
    setIsOpen(true);
    dispatch(setCurrentNote(null));
  };

  useEffect(() => {
    dispatch(getNotesList());
  }, []);

  useEffect(() => {
    if (searchValue.length === 0 && tags.length === 0) {
      dispatch(setIsSearched(false));
    } else {
      dispatch(setIsSearched(true));
      dispatch(setFilteredNotesList({ query: searchValue, selectedTags: tags }));
    }
  }, [searchValue, tags]);

  useEffect(() => {
    setCurrentNotesList(isSearched ? searchedNotesList : notesList);
  }, [notesList, searchedNotesList, isSearched]);

  return (
    <Container
      fixed
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '30px 10px',
      }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        style={{ marginBottom: '30px' }}>
        <Grid item>
          <Typography variant="h3" component="h1">
            Заметки
          </Typography>
        </Grid>
        <Grid item>
          <ButtonComponent
            title="Создать заметку"
            type={ButtonTypes.PRIMARY}
            onClick={onCreateNoteBtnClick}
            tooltip=""
          />
        </Grid>
      </Grid>
      <Paper
        variant="outlined"
        style={{ padding: '25px 20px 20px 20px', position: 'relative' }}>
        <Typography
          variant="h6"
          style={{
            position: 'absolute',
            left: '20px',
            backgroundColor: '#ffffff',
            top: '-18px',
            padding: '0 5px',
          }}>
          Фильтры:
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={7}>
            <Field title="Поиск" value={searchValue} onChange={setSearchValue} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SelectComponent
              id="tags"
              labelId="tags-label"
              title="Теги"
              value={tags}
              onChange={setTags}
              optionsList={tagOptions}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <ButtonComponent
              title={<ClearIcon />}
              type={ButtonTypes.SECONDARY}
              onClick={onClearFiltersBtnClick}
              tooltip="Очистить фильтры"
              disabled={searchValue.length === 0 && tags.length === 0}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper
        variant="outlined"
        style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '20px',
          flex: '1',
        }}>
        {!isLoading ? (
          currentNotesList.length > 0 ? (
            currentNotesList.map((note) => {
              return (
                <NoteItem
                  key={note.id}
                  noteData={note}
                  setIsOpenWindow={setIsOpen}
                  selectedTags={tags}
                />
              );
            })
          ) : (
            <EmptyState
              title={isSearched ? 'По запросу ничего не найдено' : 'Список заметок пуст'}
              description={
                isSearched
                  ? 'Введите другой запрос или выберите другую комбинацию тегов'
                  : 'Создайте новую заметку'
              }
            />
          )
        ) : (
          <CircularProgress
            style={{
              flex: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </Paper>
      <ModalWindow
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        noteData={currentNote}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default App;
