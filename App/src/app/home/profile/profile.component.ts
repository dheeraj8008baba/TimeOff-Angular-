import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  id: any;
  data = (localStorage.getItem('data')==null);
  profile= {}

  constructor(private serve: AppService) { }

  ngOnInit() {
    if(!this.data){
     this.id =  JSON.parse(localStorage.getItem('data')).id
    }
    if(this.id!=null && !this.data){
      this.serve.getProfile(this.id).subscribe(res=>{
        this.profile = res;
      })
    }
    
  }

}
