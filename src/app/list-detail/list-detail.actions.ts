import { Action } from '@ngrx/store';
import { List, Category } from '../list/list.model';

export const CREATE = '[Category] Create'
// export const UPDATE = '[Lists] Update'
// export const DELETE = '[Lists] Delete'

export const QUERY = '[Category] Query'
export const ADD_ALL = '[Lists] Add All'
export const SUCCESS = '[Category] Successful firestore write'

export class Create implements Action {
  readonly type = CREATE;
  constructor(public category: Category) {}
}

// export class Update implements Action {
//   readonly type = UPDATE;
//   constructor(
//     public id: string,
//     public changes: Partial<List>
//   ) {}
// }
//
// export class Delete implements Action {
//   readonly type = DELETE;
//   constructor(public id: string) {}
// }

export class Query implements Action {
    readonly type = QUERY;
    constructor() {}
}

export class AddAll implements Action {
  readonly type = ADD_ALL;
  constructor(public categories: Category[]) {}
}

export class Success implements Action {
  readonly type = SUCCESS;
  cosntructor() {}
}
export type ListActions = Create |
  // Update |
  // Delete |
  Query |
  AddAll |
  Success;
