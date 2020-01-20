import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { EmpListModel } from './empList.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  id1 : any;
  data = (localStorage.getItem('data')==null);
  empList : EmpListModel[];

  constructor(private http: HttpClient, private service: AppService, private router: Router) {  }

  ngOnInit() {
    if(!this.data){
      this.id1 = JSON.parse(localStorage.getItem('data')).id;
      this.getData();
    }
  }

  getData(){
    this.service.getEmpList().subscribe(res=>{
      this.empList = res;
    })
  }

  editEmpList(id){
    this.router.navigate(['/editProfile',id]);
  }

  onClick(id){
    if(id === this.id1){
      alert("You can't delete your own profile");
    }else{
    if(confirm("Are you sure to delete the record") == true){
      this.http.delete(`http://localhost:3000/employees/${id}`).subscribe(res=>{
        this.getData();
      });
    }
  }
  }

}
