import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { AllListsComponent } from './all-lists/all-lists.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'lists', component: AllListsComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
