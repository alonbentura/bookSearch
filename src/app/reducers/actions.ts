import { Action } from '@ngrx/store';


export class AddToWithList implements Action {
  readonly type = 'ADD';
  constructor(public payload: any) { }
}
