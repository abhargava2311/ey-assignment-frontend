import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  
  

  constructor() { }

   authenticate(username:string, password:string){
     if(username ==='Test' && password === 'dummy'){
     sessionStorage.setItem('authenticateUser',username)
      return true;
     }
     return false;
   } 


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }
}
