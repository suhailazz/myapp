import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { componentFactoryName } from '@angular/compiler';
import { OneEmployeeComponent } from './employees/one-employee.component';
import { CanDeactivateGuardService } from './employees/can-deactivate-guard.service';
import {  EmployeeDetailsComponent} from './employees/employee-details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDeatailsGuardService } from './employees/employee-details-guard.service';

const routes: Routes = [
  { path: 'list', component: ListEmployeesComponent},
  { path: 'edit/:id', component: CreateEmployeeComponent,
            canDeactivate:[CanDeactivateGuardService]
  },
  { path: 'employees/:id', component: EmployeeDetailsComponent,
          canActivate:[EmployeeDeatailsGuardService]},
  { path: 'employee', component: OneEmployeeComponent},
  { path:'', redirectTo:'/list', pathMatch: 'full'},
  { path: 'notfound', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
