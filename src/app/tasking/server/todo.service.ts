import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../../store';

@Injectable()
export class TodoService {
  private readonly url = 'http://localhost:3000/state';

  constructor(private http: Http,
              private ngRedux: NgRedux<IAppState>) { }

  loadTodos() {
    this.ngRedux.dispatch({type: 'FETCH_TODOS_REQUEST'});

    this.http.get(this.url).subscribe(todos => {
      const data = todos.json().tasking.todos;

      this.ngRedux.dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        data
      });
    }, err => {
      this.ngRedux.dispatch({
        type: 'FETCH_TODOS_ERROR',
        error: err
      });
    });
  }
}
