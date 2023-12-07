export enum NotesActionTypes {
  GET_NOTES_LIST = 'GET_NOTES_LIST',
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
};

//

export type GetNotesListActionType = {
  type: NotesActionTypes.GET_NOTES_LIST;
};

//

export type NotesActionType = GetNotesListActionType;
