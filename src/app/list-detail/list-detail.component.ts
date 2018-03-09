import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewCategoryDialogComponent } from '../new-category-dialog/new-category-dialog.component';
import { Category } from '../list/list.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const listId = this.route.snapshot.paramMap.get('id');
    
  }
  addCategory(): void {
    const dialogRef = this.dialog.open(NewCategoryDialogComponent, {
      width: '250px',
      data: { category: <Category>{} }
    });

    dialogRef.afterClosed().subscribe(result => {
      const category: Category = {
        name: result.name
      }
      // this.store.dispatch(new actions.Create(list));
    });
  }
}
