export enum NotesActionTypes {
  GET_NOTES_LIST = 'GET_NOTES_LIST',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_NOTES_LIST = 'SET_NOTES_LIST',
}

//

export type NoteType = {
  id: number;
  title: string;
  description: string;
};

export type NotesListType = NoteType[];

export type CreateNoteData = {
  title: string;
  description: string;
};

//

export type NotesState = {
  notesList: NotesListType;
  isLoading: boolean;
};

//

export type GetNotesListActionType = {
  type: NotesActionTypes.GET_NOTES_LIST;
};

export type SetIsLoadingActionType = {
  type: NotesActionTypes.SET_IS_LOADING;
  payload: boolean;
};

export type SetNotesListActionType = {
  type: NotesActionTypes.SET_NOTES_LIST;
  payload: NotesListType;
};

//

export type NotesActionType = SetIsLoadingActionType | SetNotesListActionType;
