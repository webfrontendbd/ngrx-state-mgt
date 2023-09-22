import { createReducer, on } from '@ngrx/store';
import { EmployeeState } from './employee.state';
import * as EmployeeActions from './employee.actions';

export const _employeeReducer = createReducer(
  EmployeeState,
  on(EmployeeActions.loadEmployee, (state) => {
    return {
      ...state,
    };
  }),
  on(EmployeeActions.addEmployee, (state, action) => {
    const _employee = { ...action.employee };
    _employee.id = state.employeeList.length + 1;
    return {
      ...state,
      employeeList: [...state.employeeList, _employee],
    };
  }),
  on(EmployeeActions.updateEmployee, (state, action) => {
    const _employee = { ...action.employee };
    const updateEmployee = state.employeeList.map((employee) => {
      return _employee.id === employee.id ? _employee : employee;
    });
    return {
      ...state,
      employeeList: updateEmployee,
    };
  }),
  on(EmployeeActions.deleteEmployee, (state, action) => {
    const updateEmployee = state.employeeList.filter((employee) => {
      return employee.id !== action.id;
    });
    return {
      ...state,
      employeeList: updateEmployee,
    };
  })
);

export function employeeReducer(state: any, action: any) {
  return _employeeReducer(state, action);
}
