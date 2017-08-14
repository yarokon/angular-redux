import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../store';
import { ToDo } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { TodoService } from '../server/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select(['tasking', 'todos']) readonly todos$: Observable<ToDo[]>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private todoService: TodoService) { }

  delete = './assets/delete.svg';

  addTodo(input) {
    const title: string = input.value.trim();

    if (title) {
      this.ngRedux.dispatch({type: ADD_TODO, title});

      input.value = '';
      input.focus();
    }
  }

  onEnter(input) {
    this.addTodo(input);
  }

  toggleTodo(id) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id });
  }

  removeTodo(id) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id });
  }
}
