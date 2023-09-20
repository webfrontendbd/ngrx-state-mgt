import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Counter } from 'src/app/_models/counter';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  counterValue: number;
  orgname: string;
  counterSubscription: Subscription;
  counter$:Observable<Counter>;
  constructor(private store: Store<{ counter: Counter }>) {}

  
  ngOnInit() {
    // this.counterSubscription = this.store.select('counter').subscribe({
    //   next: (response) => {
    //     this.counterValue = response.value;
    //     this.orgname = response.name;
    //   },
    // });

    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    // if(this.counterSubscription){
    //   this.counterSubscription.unsubscribe();
    // }
  }
}
