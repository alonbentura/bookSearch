import { Component } from '@angular/core';
import { Store, State } from '@ngrx/store';

// tslint:disable-next-line:no-empty-interface
interface AppState { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(store: Store<AppState>) { }
  title = 'app';
}
