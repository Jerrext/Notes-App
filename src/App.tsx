import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import { Grid, Container, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { ButtonTypes, InputTypes } from './utils/@globalTypes';
import Field from './components/Field';
import ButtonComponent from './components/ButtonComponent';
import SelectComponent from './components/SelectComponent';
import NoteItem from './components/NoteItem';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: '#000000',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

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

  const notes = [
    { id: 1, title: 'title', description: 'description' },
    {
      id: 2,
      title:
        'title title title titletitle title titletitletitle title title title title title titletitle title titletitletitle title title title title title titletitle title titletitletitle title title title title title titletitle title titletitletitle title title title title title titletitle title titletitletitle title title',
      description: 'description',
    },
    { id: 3, title: 'title', description: 'description' },
    { id: 4, title: 'title', description: 'description' },
    { id: 5, title: 'title', description: 'description' },
    { id: 6, title: 'title', description: 'description' },
  ];

  return (
    <>
      <Container fixed>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          style={{ padding: '30px 0' }}>
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
            gap: '20px',
            padding: '20px',
          }}>
          {notes.map((note) => {
            return (
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
              />
            );
          })}
        </Paper>
      </Container>
    </>
  );
};

export default App;
