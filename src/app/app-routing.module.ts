import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { AllListsComponent } from './all-lists/all-lists.component';

const routes: Routes = [
  { path: 'lists', component: AllListsComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
