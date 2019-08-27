export class Employee {
    id: number;
    name:string;
    gender:string;
    email?:string;
    phoneNumber?:number;
    contactPreference:string;
    dateOfBirth:Date;
    department:string;
    isActive:boolean;
    photoPath?:string;
  }
  export class Department {
    id:number;
    name:string;
}