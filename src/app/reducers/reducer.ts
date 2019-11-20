import { Action } from '@ngrx/store';
import _ from 'lodash';

const wishList = [];

export const reducer = (state = wishList, action) => {
  switch (action.type) {

    case 'ADD':
      return [...state, action.payload.book];
    case 'REMOVE':
      return state.filter(item => item !== action.payload.book);
    default:
      return state;
  }
};
