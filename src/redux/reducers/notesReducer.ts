import { NotesActionType, NotesActionTypes, NotesState } from '../types/notesTypes';

const initialState: NotesState = {
  notesList: [],
  searchedNotesList: [],
  isSearched: false,
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
    case NotesActionTypes.SET_FILTERED_NOTES_LIST:
      const queryIsEmpty = payload.query.length === 0;
      const selectedTagsIsEmpty = payload.selectedTags.length === 0;

      return {
        ...state,
        searchedNotesList: state.notesList
          .map((note) => {
            return {
              ...note,
              tags: note.tags.map((tag) =>
                payload.selectedTags.includes(tag.title)
                  ? { ...tag, selected: true }
                  : { ...tag, selected: false },
              ),
            };
          })
          .filter((note) => {
            const isTagsMatches =
              note.tags.filter((tag) => tag.selected === true).length ===
              payload.selectedTags.length;

            const isQueryMatches = new RegExp(payload.query).test(note.title);

            if (!queryIsEmpty && selectedTagsIsEmpty) {
              return isQueryMatches;
            } else if (queryIsEmpty && !selectedTagsIsEmpty) {
              return isTagsMatches;
            } else {
              return isTagsMatches && isQueryMatches;
            }
          }),
      };
    case NotesActionTypes.SET_IS_SEARCHED:
      return { ...state, isSearched: payload };
    default:
      return state;
  }
};
