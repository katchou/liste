import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { AllListsComponent } from './all-lists/all-lists.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'listes', component: AllListsComponent, canActivate: [AuthGuard] },
  { path: 'liste/:id', component: ListDetailComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
