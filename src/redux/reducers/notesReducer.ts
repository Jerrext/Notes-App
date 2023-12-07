import { NotesActionType, NotesActionTypes, NotesState } from '../types/notesTypes';

const initialState: NotesState = {
  notesList: [],
};

export const notesReducer = (
  state = initialState,
  { type, payload }: any,
): NotesState => {
  switch (type) {
    case NotesActionTypes.GET_NOTES_LIST:
      return state;
    default:
      return state;
  }
};
