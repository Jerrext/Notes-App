import { all, takeLatest, put, call } from 'redux-saga/effects';
import {
  CreateNoteActionType,
  DeleteNoteActionType,
  NoteType,
  NotesActionTypes,
  NotesListType,
} from '../types/notesTypes';
import axios, { AxiosResponse } from 'axios';
import {
  addNoteInList,
  removeNoteFromList,
  setIsLoading,
  setNotesList,
} from '../actions/notesActions';
import API from '../api';

function* getNotesListWorker() {
  try {
    yield put(setIsLoading(true));
    const { data }: AxiosResponse<NotesListType> = yield call(API.getNotesListRequest);
    yield put(setNotesList(data));
    yield put(setIsLoading(false));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn(error.message);
    }
  }
}

function* createNoteWorker(action: CreateNoteActionType) {
  const { callback, data } = action.payload;
  try {
    yield put(setIsLoading(true));
    const { data: responseData }: AxiosResponse<NoteType> = yield call(
      API.createNoteRequest,
      data,
    );
    yield put(addNoteInList(responseData));
    callback();
    yield put(setIsLoading(false));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn(error.message);
    }
  }
}

function* deleteNoteWorker(action: DeleteNoteActionType) {
  try {
    yield put(setIsLoading(true));
    yield call(API.deleteNoteRequest, action.payload);
    yield put(removeNoteFromList(action.payload));
    yield put(setIsLoading(false));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn(error.message);
    }
  }
}

export default function* notesSaga() {
  yield all([
    takeLatest(NotesActionTypes.GET_NOTES_LIST, getNotesListWorker),
    takeLatest(NotesActionTypes.CREATE_NOTE, createNoteWorker),
    takeLatest(NotesActionTypes.DELETE_NOTE, deleteNoteWorker),
  ]);
}
