import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from 'src/app/_models/counter';
import * as counterActions from 'src/app/store/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: Counter }>) {}
  
  onIncrement() {
    this.store.dispatch(counterActions.increment());
  }

  onDecrement(){
    this.store.dispatch(counterActions.decrement());
  }

  onReset(){
    this.store.dispatch(counterActions.reset());
  }
}
