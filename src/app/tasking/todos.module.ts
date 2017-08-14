import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';
import { HttpModule } from '@angular/http';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { ServerComponent } from './server/server.component';
import { TodoService } from './server/todo.service';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    HttpModule
  ],
  declarations: [
    TodoListComponent,
    TodoDashboardComponent,
    ServerComponent
  ],
  exports: [
    TodoListComponent,
    TodoDashboardComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodosModule { }
