import axios from 'axios';
import { CreateNoteData } from '../types/notesTypes';

const API_URL = 'https://65721505d61ba6fcc01459c9.mockapi.io';

const apiAxios = axios.create({ baseURL: API_URL });

const getNotesListRequest = () => {
  return apiAxios.get('/notes');
};

const createNoteRequest = (data: CreateNoteData) => {
  return apiAxios.post('/notes', data);
};

const deleteNoteRequest = (id: number) => {
  return apiAxios.delete(`/notes/${id}`);
};

export default { getNotesListRequest, createNoteRequest, deleteNoteRequest };
