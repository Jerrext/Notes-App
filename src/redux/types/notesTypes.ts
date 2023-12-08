export enum NotesActionTypes {
  GET_NOTES_LIST = 'GET_NOTES_LIST',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_NOTES_LIST = 'SET_NOTES_LIST',
  GET_TAGS_LIST = 'GET_TAGS_LIST',
  CREATE_NOTE = 'CREATE_NOTE',
  ADD_NOTE_IN_LIST = 'ADD_NOTE_IN_LIST',
  DELETE_NOTE = 'DELETE_NOTE',
  REMOVE_NOTE_FROM_LIST = 'REMOVE_NOTE_FROM_LIST',
  SET_CURRENT_NOTE = 'SET_CURRENT_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  UPDATE_NOTES_LIST = 'UPDATE_NOTES_LIST',
}

export type PayloadWithCallback<Data> = {
  data: Data;
  callback: () => void;
};

//

export type NoteType = {
  id: number;
  title: string;
  tags: TagsListType;
};

export type NotesListType = NoteType[];

export type TagType = {
  id: string;
  title: string;
};

export type TagsListType = TagType[];

export type CreateNoteData = {
  title: string;
  tags: TagsListType;
};

export type UpdateNoteData = CreateNoteData;

export type CreateNotePayloadData = PayloadWithCallback<CreateNoteData>;

export type UpdateNotePayloadData = PayloadWithCallback<NoteType>;

//

export type NotesState = {
  notesList: NotesListType;
  isLoading: boolean;
  currentNote: NoteType | null;
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

export type CreateNoteActionType = {
  type: NotesActionTypes.CREATE_NOTE;
  payload: CreateNotePayloadData;
};

export type AddNoteActionType = {
  type: NotesActionTypes.ADD_NOTE_IN_LIST;
  payload: NoteType;
};

export type DeleteNoteActionType = {
  type: NotesActionTypes.DELETE_NOTE;
  payload: number;
};

export type RemoveNoteFromListActionType = {
  type: NotesActionTypes.REMOVE_NOTE_FROM_LIST;
  payload: number;
};

export type SetCurrentNoteActionType = {
  type: NotesActionTypes.SET_CURRENT_NOTE;
  payload: NoteType | null;
};

export type UpdateNoteActionType = {
  type: NotesActionTypes.UPDATE_NOTE;
  payload: UpdateNotePayloadData;
};

export type UpdateNotesListActionType = {
  type: NotesActionTypes.UPDATE_NOTES_LIST;
  payload: NoteType;
};

//

export type NotesActionType =
  | SetIsLoadingActionType
  | SetNotesListActionType
  | AddNoteActionType
  | RemoveNoteFromListActionType
  | SetCurrentNoteActionType
  | UpdateNotesListActionType;
