import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }  

  login(email:string, contra:string){
    
      if((email == "admin@gmail.com") && (contra =="123")){
        alert("USUARIO ENCONTRADO");
      }else{
        alert("USUARIO INCORRECTON");
      }
  }
}
