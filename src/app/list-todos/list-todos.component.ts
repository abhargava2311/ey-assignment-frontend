import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(
    public id: number,
    public description: String,
    public lastUpdated: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message: string = ''

  constructor(
    private todoservice: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoservice.retrieveAllTodos('Test').subscribe(
      response => {
        //   console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number) {
   // console.log(`delete todo ${id}`)
    this.todoservice.deleteTodo('Test', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Todo ${id} Successful !`
        this.refreshTodos()
      }
    )

  }

  updateTodo(id:number){
  //  console.log(`Update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])

  }

}
