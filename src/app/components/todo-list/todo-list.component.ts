import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todos$.subscribe(result => {
      console.log(result);
    });

    this.todoService.cosa$.subscribe(console.log);
  }

}
