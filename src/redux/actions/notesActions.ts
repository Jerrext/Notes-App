import {
  AddNoteActionType,
  CreateNoteActionType,
  CreateNotePayloadData,
  GetNotesListActionType,
  NoteType,
  NotesActionTypes,
  NotesListType,
  SetIsLoadingActionType,
  SetNotesListActionType,
} from '../types/notesTypes';

export const getNotesList = (): GetNotesListActionType => ({
  type: NotesActionTypes.GET_NOTES_LIST,
});

export const setIsLoading = (payload: boolean): SetIsLoadingActionType => ({
  type: NotesActionTypes.SET_IS_LOADING,
  payload,
});

export const setNotesList = (payload: NotesListType): SetNotesListActionType => ({
  type: NotesActionTypes.SET_NOTES_LIST,
  payload,
});

export const createNote = (payload: CreateNotePayloadData): CreateNoteActionType => ({
  type: NotesActionTypes.CREATE_NOTE,
  payload,
});

export const addNote = (payload: NoteType): AddNoteActionType => ({
  type: NotesActionTypes.ADD_NOTE,
  payload,
});
