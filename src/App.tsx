import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import {
  Grid,
  Container,
  Typography,
  Paper,
  CircularProgress,
  Box,
} from '@material-ui/core';
import { ButtonTypes, InputTypes } from './utils/@globalTypes';
import Field from './components/Field';
import ButtonComponent from './components/ButtonComponent';
import SelectComponent from './components/SelectComponent';
import NoteItem from './components/NoteItem';
import { useTypedSelector } from './utils/hooks';
import { NotesSelectors } from './redux/selectors/selectors';
import { getNotesList } from './redux/actions/notesActions';
import EmptyState from './components/EmptyState';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useTypedSelector(NotesSelectors.getIsLoading);
  const notesList = useTypedSelector(NotesSelectors.getNotesList);

  const [searchValue, setSearchValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const onSearchBtnClick = () => {};

  const onCreateNoteBtnClick = () => {};

  const names = [
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

  useEffect(() => {
    dispatch(getNotesList());
  }, []);

  return (
    <>
      <Container
        fixed
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          padding: '30px 0',
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
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            {/* <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="search">Поиск</InputLabel>
              <OutlinedInput
                id="search"
                type="text"
                value={searchValue}
                onChange={onSearchInpChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={onSearchBtnClick}
                      // onMouseDown={handleMouseDownPassword}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl> */}
            <Field
              title="Поиск"
              value={searchValue}
              onChange={setSearchValue}
              type={InputTypes.INPUT}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SelectComponent
              id="tags"
              labelId="tags-label"
              title="Теги"
              value={tags}
              onChange={setTags}
              optionsList={names}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <ButtonComponent
              title="Поиск"
              type={ButtonTypes.PRIMARY}
              onClick={onSearchBtnClick}
            />
          </Grid>
        </Grid>
        <Paper
          variant="outlined"
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            flex: '1',
          }}>
          {!isLoading ? (
            notesList.length > 0 ? (
              notesList.map((note) => {
                return (
                  <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    description={note.description}
                  />
                );
              })
            ) : (
              <EmptyState
                title="Список заметок пуст"
                description="Создайте новую заметку"
              />
            )
          ) : (
            <CircularProgress />
          )}
        </Paper>
      </Container>
    </>
  );
};

export default App;
