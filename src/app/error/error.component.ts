import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'There is an Error, Please Contact to Support Group !'

  constructor() { }

  ngOnInit(): void {
  }

}
