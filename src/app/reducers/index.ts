import { ActionReducerMap } from '@ngrx/store';
import { allListsReducer } from '../all-lists/all-lists.reducer';

export const reducers: ActionReducerMap<any> = {
  allLists: allListsReducer
}
