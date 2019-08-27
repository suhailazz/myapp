import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee;
  private _id:number;
  constructor(private _route:ActivatedRoute,
     private _employeeService:EmployeeService) { }

     ngOnInit() {
      this._route.paramMap.subscribe(params => {
        this._id = +params.get('id');
        this._employeeService.getEmployee(this._id).subscribe(
          (employee) => this.employee = employee,
          (err: any) => console.log(err)
        );
      });
    }
}
