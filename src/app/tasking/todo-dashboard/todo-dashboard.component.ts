import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../store';
import { ToDo } from '../store';
import { CLEAR_TODOS } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select((s: IAppState) => s.tasking.todos) readonly todos$: Observable<ToDo[]>;
  @select((s: IAppState) => s.tasking.lastUpdate) readonly lastUpdate$: Observable<Date>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
