import { all, takeLatest } from 'redux-saga/effects';
import { getNotesList } from '../actions/notesActions';

function* getNotesListWorker() {}

export default function* notesSaga() {
  yield all([takeLatest(getNotesList, getNotesListWorker)]);
}
