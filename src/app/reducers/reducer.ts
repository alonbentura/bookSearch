import { Action } from '@ngrx/store';

const initialState = {
  wishList: []
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {

    case 'ADD':
      return console.log('add');
    default:
      return state;
  }
};
