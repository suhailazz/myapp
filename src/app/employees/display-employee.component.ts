import { Component, OnInit, Input, OnChanges, SimpleChanges,Output, EventEmitter } from '@angular/core';
import { Employee,} from '../models/employee.model';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
 private selectedEmployeeId:number;
 
  @Input() employee:Employee;
  @Input() searchTerm:string;
  @Output() notify:EventEmitter<string>= new EventEmitter<string>();
  @Output() notifyDelete:EventEmitter<number>= new EventEmitter<number>();
  confirmDelete = false;
  constructor( private _route:ActivatedRoute,
              private _router:Router,
              private _employeeService:EmployeeService) { }

  ngOnInit() {
          this.selectedEmployeeId= +this._route.snapshot.paramMap.get('id');
          
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }
  handleClick(){
      this.notify.emit(this.employee.name);
  }
  getEmployeeNameAndGender(): string{
    return this.employee.name +' ' + this.employee.gender;
  }
  viewEmployee(){
    this._router.navigate(['/employees',this.employee.id],{
      queryParams:{'searchTerm': this.searchTerm}
    });
  }
    editEmployee(){
      this._router.navigate(['/edit',this.employee.id]);
    }
    deleteEmployee() {
      this._employeeService.deleteEmployee(this.employee.id).subscribe(
        () => console.log(`Employee with ID = ${this.employee.id} Deleted`),
        (err) => console.log(err)
      );
      this.notifyDelete.emit(this.employee.id);
    }
    
}
