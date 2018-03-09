import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllListsComponent } from '../all-lists/all-lists.component';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './list.reducer';
import { MaterialComponentsModule } from '../material-components.module';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './list.effects';
import { ListDetailComponent } from '../list-detail/list-detail.component';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('list', listReducer),
    MaterialComponentsModule,
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [AllListsComponent],
  declarations: [AllListsComponent, ListDetailComponent]
})
export class ListModule { }
