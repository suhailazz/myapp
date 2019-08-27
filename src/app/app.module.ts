import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { from } from 'rxjs';
import { ConfirmPassword } from './models/confirm-password';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { OneEmployeeComponent } from './employees/one-employee.component';
import { CanDeactivateGuardService } from './employees/can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDeatailsGuardService } from './employees/employee-details-guard.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    ConfirmPassword,
    DisplayEmployeeComponent,
    OneEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, CanDeactivateGuardService, EmployeeDeatailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
