import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewListDialogComponent } from '../new-list-dialog/new-list-dialog.component';
import { List } from '../list.class';

const lists = [
    {name: "courses"},
    {name: "pied"}
]

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css']
})
export class AllListsComponent implements OnInit {
  lists;

  newList =  new List();

  constructor(public dialog: MatDialog) {
    this.lists = lists;
  }

  ngOnInit() {
  }

  addList(): void {
    const dialogRef = this.dialog.open(NewListDialogComponent, {
      width: '250px',
      data: { list: this.newList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.newList.name != '') {
      console.log(this.newList);
        this.newList = new List();
      }
    });
  }
}
