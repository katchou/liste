import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './material-components.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NewListDialogComponent } from './new-list-dialog/new-list-dialog.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ListModule } from './list/list.module';
import { reducers } from './reducers/index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewListDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AngularFireModule.initializeApp(environment.firebase, 'liste'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    EffectsModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    ListModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25})

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [NewListDialogComponent]
})
export class AppModule { }
