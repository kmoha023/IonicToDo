import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ToDo } from '../../app/toDo';

/*
  Created by mdkha on 5/28/2017.
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {
//  toDosUrl: string = "assets/mock_data/mock_data.json";
   toDosUrl: string = "https://morning-peak-18555.herokuapp.com/api/todos";
  // toDosUrl: string = "https://todo-server23.herokuapp.com/todos";
  


  constructor(public http: Http) {

  }

  //GET TODO

  load(): Observable<ToDo[]> {
   return this.http.get(this.toDosUrl)
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }




   //ADD TODO
  add(todo: string): Observable<ToDo> {
    let body = JSON.stringify({description: todo});
    let headers = new Headers({'Content-Type': 'application/json'});
  
    return this.http.post(this.toDosUrl, body, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }
  
  //UPDATE TODO
   update(todo: ToDo) {
    let url = `${this.toDosUrl}/${todo._id}`; //see mdn.io/templateliterals
    let body = JSON.stringify(todo)
    let headers = new Headers({'Content-Type': 'application/json'});
  
    return this.http.put(url, body, {headers: headers})
      .map(() => todo) //See mdn.io/arrowfunctions
      .catch(this.handleError);
  }
  
  //DELETE TODO
  delete(todo: ToDo) {
    let url = `${this.toDosUrl}/${todo._id}`;
    let headers = new Headers({'Content-Type': 'application/json'});
  
    return this.http.delete(url, headers)
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');

  }

}
