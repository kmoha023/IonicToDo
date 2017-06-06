import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemSliding, Item } from 'ionic-angular';

import { TodoService } from '../../providers/todo-service/todo-service';
import {ToDo} from "../../app/toDo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoService]
})
export class HomePage {
  public todos:ToDo[];

  constructor(public  todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos(){
  this.todoService.load()
    .subscribe(data => {
      this.todos = data;
    })
  }
}
