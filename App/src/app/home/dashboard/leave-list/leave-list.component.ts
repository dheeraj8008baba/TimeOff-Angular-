import { Component, OnInit } from '@angular/core';
import { LeaveModel } from '../leave/leaveModel';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  leaveDatas :  LeaveModel[];
  myLeaveData = {};
  data = (localStorage.getItem('data')==null);

  constructor(private http: HttpClient, private service: AppService, private router: Router) {}

  ngOnInit() {
    if(!this.data){
      this.fetchData();
    }
    }

    fetchData(){
      this.service.getleaveApplication().subscribe((res)=>{
        this.leaveDatas = res;
      })
    }
     

    onDelete(id){
      if(confirm('Are you sure to delete this record ? ')==true){
      this.http.delete(`http://localhost:3001/leave/${id}`).subscribe(res=>{
        this.fetchData();
      })
    }
  }
    onEdit(id){
        this.router.navigate(['/dashboard/leave',id]);
      }; 
    }
    
  
  