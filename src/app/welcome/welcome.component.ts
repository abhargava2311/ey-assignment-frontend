import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  name=''
  welcomeMessageFromService:String =''

  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    //console.log('Get Welcome Messge')
  }

  getWelcomeMessageWithParameter(){
   // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    //console.log('Get Welcome Messge')
  }

  

  handleSuccessfulResponse(response: HelloWorldBean){
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message
  }



}
