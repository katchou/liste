import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewListDialogComponent } from '../new-list-dialog/new-list-dialog.component';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as actions from './all-lists.actions';
import * as fromList from './all-lists.reducer';
import { List } from '../list/list.model';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css']
})
export class AllListsComponent implements OnInit {

  lists : Observable<any>;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromList.State>
  ) {}

  ngOnInit() {
    this.lists = this.store.select(fromList.selectAll);
    this.store.dispatch( new actions.Query());
  }

  createList(): void {
    const dialogRef = this.dialog.open(NewListDialogComponent, {
      width: '250px',
      data: { list: <List>{} }
    });

    dialogRef.afterClosed().subscribe(result => {
      const list: List = {
        name: result.name
      }
      this.store.dispatch(new actions.Create(list));
    });
  }
}
