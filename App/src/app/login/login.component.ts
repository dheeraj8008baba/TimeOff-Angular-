import { Component, OnInit } from '@angular/core';
import { LogModel } from './logModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logData = new LogModel('','');
  err = "";
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (this.isUserAuthenticated()) {
      this.router.navigate(['/dashboard']);
     }
    }

  onSubmit(){
    return this.http.post("http://localhost:3000/login", this.logData, {responseType: 'text'}).subscribe(res=>{
      if(res === "User not found or Invalid details"){
        this.err = res;
      }else if(!this.isUserAuthenticated()) {
        localStorage.setItem('data',res);
        this.router.navigate(['/dashboard']);
      }
    })
  }

  isUserAuthenticated(): boolean {
    if(localStorage.getItem("data") != null) 
      return true;
    else {
      return false;
    }
    }

}
