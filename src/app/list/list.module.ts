import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllListsComponent } from '../all-lists/all-lists.component';
import { NewListDialogComponent } from '../new-list-dialog/new-list-dialog.component';
import { StoreModule } from '@ngrx/store';
import { allListsReducer } from '../all-lists/all-lists.reducer';
import { MaterialComponentsModule } from '../material-components.module';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from '../all-lists/all-lists.effects';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewCategoryDialogComponent } from '../new-category-dialog/new-category-dialog.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    StoreModule.forFeature('list', allListsReducer),
    MaterialComponentsModule,
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [AllListsComponent],
  declarations: [
    AllListsComponent,
    NewListDialogComponent,
    ListDetailComponent,
    NewCategoryDialogComponent
  ],
  entryComponents: [
    NewListDialogComponent,
    NewCategoryDialogComponent
  ]
})
export class ListModule { }
