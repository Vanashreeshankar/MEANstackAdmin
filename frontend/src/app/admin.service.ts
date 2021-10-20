import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './admin.model';
import { map } from 'rxjs/operators';


@Injectable()
export class AdminService {

  selectedEmployee!: Employee;
  

  url = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) { }

 postEmployee(emp: Employee){
   return this.http.post(this.url, emp);
 }
 getEmployeeList(){
   return this.http.get(this.url);
 }
 putEmployee(emp: Employee){
   return this.http.put(this.url + '/$(emp._id)',emp);
 }
 deleteEmployee(_id: string){
   return this.http.delete(this.url +'/${id}');
 }
 deleteData(user: Employee[]): Observable < string > {  
  const httpOptions = {  
      headers: new HttpHeaders({  
          'Content-Type': 'application/json'  
      })  
  };  
  return this.http.post < string > (`${this.url}DeleteRecord/`, user, httpOptions);  
}  

}
