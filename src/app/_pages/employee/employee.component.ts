import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/_models/employee';
import { getEmployees } from 'src/app/store/employee/employee.selectors';
import { AppStateModel } from 'src/app/store/global/app.state.model';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { deleteEmployee } from 'src/app/store/employee/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[];
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}
  ngOnInit() {
    this.store.select(getEmployees).subscribe({
      next: (response) => {
        this.employeeList = response;
      },
    });
  }
  addBlog() {
    this.openDialog(0, 'Add Employee');
  }
  openDialog(id: any, title: any, isEdit = false) {
    this.dialog.open(AddEmployeeComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit,
      },
    });
  }

  editEmployee(id: any) {
    this.openDialog(id, 'Edit Employee', true);
  }
  deleteEmployee(id: any) {
    if (confirm('Are you sure to delete this?')) {
      this.store.dispatch(deleteEmployee({ id: id }));
    }
  }
}
