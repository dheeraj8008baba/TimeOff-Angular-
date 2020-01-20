import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
 
})
export class LeaveComponent implements OnInit {
   
  id: any;   
  id1: "";
  leaveData = {};

  constructor(private http:HttpClient,private router:Router,
    private route: ActivatedRoute, private serve: AppService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    };
     }

  ngOnInit() {
    this.id1 = JSON.parse(localStorage.getItem('data')).id;
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id!=":id"){
      this.getOneData();
    }else{
      this.serve.getProfile(this.id1).subscribe(res=>{
        this.leaveData = res;
      });
    }
    
  }

  onSubmit(){
   if(this.id!=":id"){
    this.updateLeave();
   }else{
    this.http.post('http://localhost:3001/leave',this.leaveData).subscribe(res=>{
    this.router.navigate(['/leaveList']);
    })
  } 
}

  getOneData(){
    this.http.get(`http://localhost:3001/leave/${this.id}`).subscribe(res=>{
     this.leaveData = res;
    })
  }

  updateLeave(){
    this.http.put(`http://localhost:3001/leave/${this.id}`, this.leaveData).subscribe(res=>{
      this.router.navigate(['/leaveList']);
    })
  }
}
