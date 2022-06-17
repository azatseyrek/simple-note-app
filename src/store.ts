import {legacy_createStore} from 'redux';
import {notesReducer} from './notesReducer';

export const store = legacy_createStore(notesReducer);
