import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-one-employee',
  templateUrl: './one-employee.component.html',
  styleUrls: ['./one-employee.component.css']
})
export class OneEmployeeComponent implements OnInit {

 
  employees: Employee[];
    
  employeeToDisplay:Employee;
  private arrayIndex=1;
  constructor(private _employeeService: EmployeeService) { }


  ngOnInit() {
    
    this._employeeService.getEmployees().subscribe(empList => this.employees=empList)
    
    this.employeeToDisplay= this.employees[0];
  }
  nextEmployee(): void{
    if(this.arrayIndex <= 2){
      this.employeeToDisplay= this.employees[this.arrayIndex];
      this.arrayIndex++;
    }
    else
    {
      this.employeeToDisplay= this.employees[0];
      this.arrayIndex=1;
    }
  }
}