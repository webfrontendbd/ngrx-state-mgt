import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import * as counterActoin from './counter.actions';
import { Counter } from '../_models/counter';

const _counterReducer = createReducer(
  initialState,
  on(counterActoin.increment, (state) => {
    return {
      ...state,
      value: state.value + 1,
    };
  }),
  on(counterActoin.decrement, (state) => {
    return {
      ...state,
      value: state.value - 1,
    };
  }),
  on(counterActoin.reset, (state) => {
    return {
      ...state,
      value: 0,
    };
  }),
  on(counterActoin.customIncrement, (state, action) => {
    return {
      ...state,
      value:
        action.action == 'Add'
          ? state.value + action.value
          : state.value - action.value,
    };
  })
);

export function counterReducer(state: Counter, action: any) {
  return _counterReducer(state, action);
}
