import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllListsComponent } from '../all-lists/all-lists.component';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './list.reducer';
import { MaterialComponentsModule } from '../material-components.module';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './list.effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('list', listReducer),
    MaterialComponentsModule,
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [AllListsComponent],
  declarations: [AllListsComponent]
})
export class ListModule { }
