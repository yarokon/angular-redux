import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../store';
import { IMessagingState } from '../store';
import { INCREMENT, DECREMENT } from '../actions';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  @select() readonly messaging$: Observable<IMessagingState>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }
}
