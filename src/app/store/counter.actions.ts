import { createAction, props } from "@ngrx/store";

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');
export const customIncrement = createAction('Custom', props<{ value: number, action:string }>());