import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/_models/employee';

export const loadEmployee = createAction('loadEmployee');
export const addEmployee = createAction(
  'addEmployee',
  props<{ employee: Employee }>()
);
export const updateEmployee = createAction(
  'updateEmployee',
  props<{ employee: Employee }>()
);
export const deleteEmployee = createAction(
  'deleteEmployee',
  props<{ id: number }>()
);
