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
import { AllListsComponent } from './all-lists/all-lists.component';
import { AppRoutingModule } from './app-routing.module';
import { NewListDialogComponent } from './new-list-dialog/new-list-dialog.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllListsComponent,
    NewListDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AngularFireModule.initializeApp(environment.firebase, 'liste'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [NewListDialogComponent]
})
export class AppModule { }
