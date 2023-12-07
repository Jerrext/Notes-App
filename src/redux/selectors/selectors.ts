import { RootState } from '../reducers';

export const getState = (state: RootState) => state;

const getNotesList = (state: RootState) => state.notes.notesList;
const getIsLoading = (state: RootState) => state.notes.isLoading;

//

export const NotesSelectors = {
  getNotesList,
  getIsLoading,
};
