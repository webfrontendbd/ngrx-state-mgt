import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from 'src/app/_models/counter';
import { customIncrement } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent {
  customValue: number;
  actionType:string='Add';
  constructor(private store: Store<{ counter: Counter }>) {}
  onIncrement() {
    this.store.dispatch(customIncrement({ value: +this.customValue, action:this.actionType }));
  }
}
