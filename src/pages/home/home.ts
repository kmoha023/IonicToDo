import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemSliding, Item } from 'ionic-angular';

import { TodoService } from '../../providers/todo-service/todo-service';
import {ToDo} from "../../app/toDo";
import { TodoEditPage } from '../todo-edit/todo_edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoService]
})
export class HomePage {
  public todos:ToDo[];

  constructor(public  todoService: TodoService,public nav: NavController ) {
    this.loadTodos();
  }

// Get all todos
  loadTodos(){
  this.todoService.load()
    .subscribe(data => {
      this.todos = data;
    })
  }

//add Todo
  addTodo(todo:string){
    this.todoService.add(todo)
        .subscribe(data => { this.todos.push(data)
    });
  }

//Toggle Complete property
toggleComplete(todo:ToDo){
  todo.isComplete = !todo.isComplete;
  this.todoService.update(todo)
      .subscribe(data=>{
        todo = data;
      })
  }

//Delete Method
deleteTodo(todo:ToDo, index:number){
  this.todoService.delete(todo)
      .subscribe(Response => {
        this.todos.splice(index, 1)
      });
  }

//Edit Todo
navToEdit(todo: ToDo, index:number){
  this.nav.push(TodoEditPage, {
    todo: todo,
    todos: this.todos,
    index: index
  });
}


}
