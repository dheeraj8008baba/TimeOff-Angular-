import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dropdownShow = false;
  id: any;
  fullname: any;
  data = (localStorage.getItem('data')==null);
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    if(!this.data){
     this.fullname =  JSON.parse(localStorage.getItem('data')).fname + " " +JSON.parse(localStorage.getItem('data')).lname
     this.id = JSON.parse(localStorage.getItem('data')).id;
    }
    if(this.fullname == ""){
      this.router.navigate(['/login']);
    }
  }

  headerDropdown(){
    this.dropdownShow = !this.dropdownShow;
  }

  onLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  onClick(){
    if(confirm("Are you sure to delete the account permanently") == true){
      this.http.delete(`http://localhost:3000/employees/${this.id}`).subscribe(res=>{
      localStorage.clear();
      });
      this.router.navigate(['/login']);
    }
  }

}
