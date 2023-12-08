import { NotesActionType, NotesActionTypes, NotesState } from '../types/notesTypes';

const initialState: NotesState = {
  notesList: [],
  isLoading: false,
  currentNote: null,
};

export const notesReducer = (
  state = initialState,
  { type, payload }: NotesActionType,
): NotesState => {
  switch (type) {
    case NotesActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case NotesActionTypes.SET_NOTES_LIST:
      return { ...state, notesList: payload };
    case NotesActionTypes.ADD_NOTE_IN_LIST:
      return { ...state, notesList: [...state.notesList, payload] };
    case NotesActionTypes.REMOVE_NOTE_FROM_LIST:
      return {
        ...state,
        notesList: state.notesList.filter((note) => note.id !== payload),
      };
    case NotesActionTypes.SET_CURRENT_NOTE:
      return { ...state, currentNote: payload };
    case NotesActionTypes.UPDATE_NOTES_LIST:
      return {
        ...state,
        notesList: state.notesList.map((item) =>
          item.id === payload.id ? payload : item,
        ),
      };
    default:
      return state;
  }
};
