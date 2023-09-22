import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/_models/employee';
import { addEmployee, updateEmployee } from 'src/app/store/employee/employee.actions';
import { getEmployeeById } from 'src/app/store/employee/employee.selectors';
import { AppStateModel } from 'src/app/store/global/app.state.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  pageTitle: string;
  employeeId: number;
  employee: Employee;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeComponent>,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit() {
    this.pageTitle = this.data.title;
    if (this.data.isEdit) {
      this.employeeId = this.data.id;
      this.store.select(getEmployeeById(this.employeeId)).subscribe({
        next: (response) => {
          this.employee = response;
          this.employeeForm.patchValue({
            id: this.employee.id,
            name: this.employee.name,
            email: this.employee.email,
            phone: this.employee.phone,
            city: this.employee.city,
            salary: this.employee.salary,
          });
        },
      });
    }
  }

  employeeForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    city: [''],
    salary: [0, [Validators.required, Validators.min(1)]],
  });

  closeDialog() {
    this.dialogRef.close();
  }
  saveEmployee() {
    if (this.employeeForm.valid) {
      const _employee: Employee = {
        id: 0,
        name: this.employeeForm.value.name as string,
        email: this.employeeForm.value.email as string,
        phone: this.employeeForm.value.phone as string,
        city: this.employeeForm.value.city as string,
        salary: this.employeeForm.value.salary as number,
      };
      if (this.data.isEdit) {
        _employee.id = this.employeeForm.value.id as number;
        this.store.dispatch(updateEmployee({ employee: _employee }));
      } else {
        this.store.dispatch(addEmployee({ employee: _employee }));
      }
      this.closeDialog();
    }
  }
}
