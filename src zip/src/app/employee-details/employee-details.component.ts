import { Component } from '@angular/core';

class Employee {
  name: string='';
  fatherName: string='';
  dob: string='';
  mobile: string='';
  email: string='';
  age: number=0;
  gender: string='';
  department: string='';
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employee: Employee = new Employee();
  departments: string[] = ['Developer', 'Tester', 'HR', 'DevOps', 'QA', 'Manager'];
  submitted: boolean = false;
  colour='green';

  onSubmit(): void {
    this.submitted = true;
    
  }
}
