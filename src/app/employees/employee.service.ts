import { Injectable } from '@angular/core';
import {  Employee } from '../models/employee.model';
import { Observable, throwError} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpHeaderResponse}  from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable()
export class EmployeeService {
  constructor(private httpClient: HttpClient){}
  baseUrl:'http://localhost:3000/employees';
  
 

getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees')
        .catch(this.handleError);
  }

private handleError(errorResponse:HttpErrorResponse){
  if(errorResponse.error instanceof ErrorEvent){
    console.log('client side error:', errorResponse.error.message);
  }
  else{
    console.error('server side error:', errorResponse);
  }
  return throwError('there is a problem with the service. We are working on it. Please try again later.')
} 



getEmployee(id: number): Observable<Employee> {
  return this.httpClient.get<Employee>(`${'http://localhost:3000/employees'}/${id}`)
      .pipe(catchError(this.handleError));
}
  
addEmployee(employee: Employee): Observable<Employee> {
  return this.httpClient.post<Employee>('http://localhost:3000/employees', employee, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
  .pipe(catchError(this.handleError));
}

updateEmployee(employee: Employee): Observable<void> {
  return this.httpClient.put<void>(`${'http://localhost:3000/employees'}/${employee.id}`, employee, {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
})
.pipe(catchError(this.handleError));
}


 deleteEmployee(id: number): Observable<void> {
  return this.httpClient.delete<void>(`${'http://localhost:3000/employees'}/${id}`)
      .pipe(catchError(this.handleError));
}

}
