import { Component, OnInit, ViewChild } from '@angular/core';
import { Department, Employee } from '../models/employee.model';
import { from } from 'rxjs';
import { EmployeeService} from './employee.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm', { static: true }) public createEmployeeForm:NgForm;
  previewPhoto:boolean =false;
  datePickerConfig:Partial<BsDatepickerConfig>;
  employee:Employee;
  panelTitle: string;
  departments:Department[]=[
  {id:1, name:'Help Desk'},
  {id:2, name:'HR'},
  {id:3, name:'IT'},
  {id:4, name:'payroll'}
];
  constructor( private _employeeService:EmployeeService,
    private _route:ActivatedRoute,
     private _router:Router) { 
  this.datePickerConfig= Object.assign({},
    {
      containerClass:'theme-dark-blue',
      dateInputFormat:'DD/MM/YYYY'
    });
  }
  togglePhotoPreview() {

    this.previewPhoto = !this.previewPhoto;
  
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap =>{
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null, name: null, gender: null, contactPreference: null,
        phoneNumber: null, email: '', dateOfBirth: null, department: null,
        isActive: null, photoPath: null
      };
      this.createEmployeeForm.reset();
      this.panelTitle = 'Create Employee';
    } else {
      this._employeeService.getEmployee(id).subscribe(
        (employee) => { this.employee = employee; },
        (err: any) => console.log(err)
      );
      this.panelTitle = 'Edit Employee';
    }
  }
  
  saveEmployee(employeeForm: NgForm): void {
    if (this.employee.id == null) {
      console.log(this.employee);
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          employeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => { console.log(error); }
      );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          employeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => { console.log(error); }
      );
    }
  }
  
    
}
