import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchPageComponent } from './search-page/search-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    SearchPageComponent,
    DialogComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeScreenComponent },
      { path: 'search', component: SearchPageComponent, },
      { path: 'wishList', component: WishListComponent }
    ]),
    StoreModule.forRoot({ wishList: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
