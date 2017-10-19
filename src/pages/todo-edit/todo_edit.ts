import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoService } from '../../providers/todo-service/todo-service';
import { ToDo } from '../../app/todo';

/**
 * Generated class for the TodoEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-todo-edit',
  templateUrl: './todo_edit.html',
})
export class TodoEditPage {
  public todo: ToDo; // The Todo itself
  public todos: ToDo[]; // The list todos from the main page
  public index: number;// The index of the todo we're looking at
  constructor(public todoService:TodoService,public navCtrl: NavController, public navParams: NavParams) {
    this.todo = navParams.get('todo');
    this.todos = navParams.get('todos');
    this.index = navParams.get('index');
    console.log("Todo value "+this.todo.description);
    
  }

  saveTodo(updatedDescription: string){
    this.todo.description = updatedDescription;
    this.todoService.update(this.todo)
        .subscribe(data => {
          this.navCtrl.pop();// go back to Todo list
        });
  }

  deleteTodo(){
    this.todoService.delete(this.todo)
        .subscribe(response => {
          this.todos.splice(this.index, 1); //remove the Todo
          this.navCtrl.pop(); //go back to todo List
      });
  }
}
