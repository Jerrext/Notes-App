import {
  AddNoteActionType,
  CreateNoteActionType,
  CreateNotePayloadData,
  DeleteNoteActionType,
  GetNotesListActionType,
  NoteType,
  NotesActionTypes,
  NotesListType,
  RemoveNoteFromListActionType,
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

export const addNoteInList = (payload: NoteType): AddNoteActionType => ({
  type: NotesActionTypes.ADD_NOTE_IN_LIST,
  payload,
});

export const deleteNote = (payload: number): DeleteNoteActionType => ({
  type: NotesActionTypes.DELETE_NOTE,
  payload,
});

export const removeNoteFromList = (payload: number): RemoveNoteFromListActionType => ({
  type: NotesActionTypes.REMOVE_NOTE_FROM_LIST,
  payload,
});
