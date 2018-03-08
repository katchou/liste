import * as actions from './list.actions';
import { List } from './list.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

export const listAdapter = createEntityAdapter<List>();
export interface State extends EntityState<List> {};

export const initialState: State = listAdapter.getInitialState();

export function listReducer(
  state: State = initialState,
  action: actions.ListActions
) {
  switch (action.type) {
    case actions.ADD_ALL:
      return listAdapter.addAll(action.lists, state);

    default:
      return state;
  }
}

export const getListState = createFeatureSelector<State>('list');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = listAdapter.getSelectors(getListState);
