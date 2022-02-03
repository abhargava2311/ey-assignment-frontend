import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }


  // ************ Hardcoded Service **********************

  // retrieveAllTodos(username: any){
  //   return this.http.get<Todo[]>(`http://localhost:8090/users/${username}/todos`);
  // }

  //  retrieveTodo(username:any, id:number){

  //   return this.http.get<Todo>(`http://localhost:8090/users/${username}/todos/${id}`)
  // }

  // updateTodo(username:any, id:number,todo:Todo){

  //   return this.http.put(`http://localhost:8090/users/${username}/todos/${id}`,todo)
  // }

  // deleteTodo(username:any, id:number){

  //   return this.http.delete(`http://localhost:8090/users/${username}/todos/${id}`)
  // }

  // createTodo(username:any,todo:Todo){

  //   return this.http.post(`http://localhost:8090/users/${username}/todos`,todo)
  // }


  // ************************** JPA *****************************

  retrieveAllTodos(username: any){
    return this.http.get<Todo[]>(`http://localhost:8090/jpa/users/${username}/todos`);
  }

  retrieveTodo(username:any, id:number){

    return this.http.get<Todo>(`http://localhost:8090/jpa/users/${username}/todos/${id}`)
  }

  createTodo(username:any,todo:Todo){

    return this.http.post(`http://localhost:8090/jpa/users/${username}/todos`,todo)
  }
 

  
  updateTodo(username:any, id:number,todo:Todo){

    return this.http.put(`http://localhost:8090/jpa/users/${username}/todos/${id}`,todo)
  }
   
  deleteTodo(username:any, id:number){

    return this.http.delete(`http://localhost:8090/jpa/users/${username}/todos/${id}`)
  }


  
}
