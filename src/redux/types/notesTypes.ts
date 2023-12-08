export enum NotesActionTypes {
  GET_NOTES_LIST = 'GET_NOTES_LIST',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_NOTES_LIST = 'SET_NOTES_LIST',
  GET_TAGS_LIST = 'GET_TAGS_LIST',
  CREATE_NOTE = 'CREATE_NOTE',
  ADD_NOTE = 'ADD_NOTE',
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

export type CreateNotePayloadData = PayloadWithCallback<CreateNoteData>;

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

export type CreateNoteActionType = {
  type: NotesActionTypes.CREATE_NOTE;
  payload: CreateNotePayloadData;
};

export type AddNoteActionType = {
  type: NotesActionTypes.ADD_NOTE;
  payload: NoteType;
};

//

export type NotesActionType =
  | SetIsLoadingActionType
  | SetNotesListActionType
  | AddNoteActionType;
