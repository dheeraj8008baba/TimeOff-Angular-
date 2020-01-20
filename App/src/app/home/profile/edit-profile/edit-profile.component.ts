import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  id1 : any;
  profile= {}
  data = (localStorage.getItem('data')==null);
  id:any;

  constructor(private serve: AppService, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  
ngOnInit() {
    if(!this.data){
      this.id1 = JSON.parse(localStorage.getItem('data')).id;
      this.id = this.route.snapshot.paramMap.get('id');
    if(this.id!=":id"){
      this.getOneEmp();
    }else{
      this.fetchProfile();
    }
  }
  }

fetchProfile(){
    this.serve.getProfile(this.id1).subscribe(res=>{
      this.profile = res;
    })
  }

onSave(){
    if(this.id!=":id"){
      this.updateUser();
    }else{
      this.http.put(`http://localhost:3000/employees/${this.id1}`, this.profile).subscribe(res=>{
        this.router.navigate(['/profile']);
      })
    } 
  }

getOneEmp(){
    this.http.get(`http://localhost:3000/employees/${this.id}`).subscribe(res=>{
      this.profile = res;
    })
  }

updateUser(){
      this.http.put(`http://localhost:3000/employees/${this.id}`, this.profile).subscribe(res=>{
        this.router.navigate(['/empList']);
      })
    
  }

}
