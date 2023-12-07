import { GetNotesListActionType, NotesActionTypes } from '../types/notesTypes';

export const getNotesList = (): GetNotesListActionType => ({
  type: NotesActionTypes.GET_NOTES_LIST,
});
