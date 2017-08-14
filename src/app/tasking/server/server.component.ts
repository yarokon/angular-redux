import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  downloadTodos() {
    this.todoService.loadTodos();
  }

  uploadTodos() {
    
  }

}
