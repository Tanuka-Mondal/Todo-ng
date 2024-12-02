import { Component } from '@angular/core';
import { Todo } from '../models/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todo: Todo = {
    id: 1,
    title: 'Buy milk',
    date: new Date('2024-12-02')
  }
}
