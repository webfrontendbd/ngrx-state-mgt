import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employees } from 'src/app/_models/employee';

export const getEmployeeState = createFeatureSelector<Employees>('employee');

export const getEmployees = createSelector(getEmployeeState, (state) => {
  return state.employeeList;
});

export const getEmployeeById = (id: number) =>
  createSelector(getEmployeeState, (state) => {
    return state.employeeList.find((employee) => employee.id === id);
  });
