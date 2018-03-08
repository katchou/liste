import { ActionReducerMap } from '@ngrx/store';
import { listReducer } from '../list/list.reducer';

export const reducers: ActionReducerMap<any> = {
  list: listReducer
}
