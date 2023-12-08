import { createSelector } from 'reselect';
import { RootState } from '../reducers';

export const getState = (state: RootState) => state;

const getNotesList = (state: RootState) => state.notes.notesList;
const getSearchedNotesList = (state: RootState) => state.notes.searchedNotesList;
const getIsLoading = (state: RootState) => state.notes.isLoading;
const getIsSearched = (state: RootState) => state.notes.isSearched;
const getCurrentNote = (state: RootState) => state.notes.currentNote;
const getTagOptions = createSelector([getNotesList], (notesList) => {
  return [...new Set(notesList.map((note) => note.tags.map((tag) => tag.title)).flat())];
});

//

export const NotesSelectors = {
  getNotesList,
  getSearchedNotesList,
  getIsLoading,
  getIsSearched,
  getCurrentNote,
  getTagOptions,
};
