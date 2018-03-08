import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import * as actions from './list.actions';
import * as fromList from './list.reducer';
import { List } from './list.model';

@Injectable()
export class ListEffects {
  constructor(private actions$: Actions, private afs: AngularFirestore) {}

  @Effect() query$: Observable<Action> = this.actions$.ofType(actions.QUERY)
    .switchMap(action => {
      const ref = this.afs.collection<List>('lists');
      return ref.snapshotChanges().map(arr => {
        return arr.map(doc => {
          const data = doc.payload.doc.data();
          return { id: doc.payload.doc.id, ...data} as List;
        })
      })
    })
    .map(arr => {
      console.log(arr);
      return new actions.AddAll(arr);
    })

  @Effect() create$: Observable<Action> = this.actions$.ofType(actions.CREATE)
    .map((action: actions.Create) => action.list)
    .switchMap(list => {
      const ref = this.afs.doc<List>(`lists/${list.id}`)
      return Observable.fromPromise(ref.set(list))
    })
    .map(() => {
      return new actions.Success();
    });

  @Effect() update$: Observable<Action> = this.actions$.ofType(actions.UPDATE)
    .map((action: actions.Update) => action)
    .switchMap(data => {
      const ref = this.afs.doc<List>(`lists/${data.id}`);
      return Observable.fromPromise(ref.update(data.changes))
    })
    .map(() => {{
      return new actions.Success();
    }})

  @Effect() delete$: Observable<Action> = this.actions$.ofType(actions.DELETE)
    .map((action: actions.Delete) => action.id)
    .switchMap(id => {
      const ref = this.afs.doc<List>(`lists/${id}`);
      return Observable.fromPromise(ref.delete())
    })
    .map(() => {
      return new actions.Success();
    })
}
