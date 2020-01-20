import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private http: HttpClient){}

getleaveApplication(): Observable<any>{
  return this.http.get("http://localhost:3001/leave");
}

getMyLeave(id): Observable<any>{
  return this.http.get(`http://localhost:3001/leave/${id}`);
}

getEmpList(): Observable<any>{
  return this.http.get("http://localhost:3000/employees");
}

getProfile(id):Observable<any>{
  return this.http.get(`http://localhost:3000/employees/${id}`);
}

}
