import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todoName : string = "";
  todoDate : Date = new Date();

  todos: Todo[] = []

  ngOnInit(): void {
    let savedTodos = localStorage.getItem("todos")
    this.todos = savedTodos ? JSON.parse(savedTodos) : []
  }
  addTodo(){
    if(this.todoName.trim().length  && this.todoDate){
      let newTodo: Todo = {
        id: Date.now(),
        title: this.todoName,
        date: this.todoDate
      }

      this.todos.push(newTodo);

      this.todoName = "";
      this.todoDate = new Date();
      localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

  deleteTodo(index: number){
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}