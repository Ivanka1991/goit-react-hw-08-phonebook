import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
  fetchContactsSuccess,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const item = (state = [], action) => {
//   switch (action.type) {
//     case 'phonebook/addContact':
//       return [...state, action.payload]

//     case 'phonebook/deleteContact':
//       return state.filter(({id}) => id !== action.payload)

//       default:
//         return state
//   }
// }

// const filter = (state='', action) => {
//   switch (action.type) {
//     case 'phonebook/changeFilter':
//       return action.payload

//       default:
//         return state
//   }
// }
// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
