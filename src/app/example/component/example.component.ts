import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app.state';
import { ExampleActions } from '../actions/example.actions';
import { getCounter } from '../reducers/selectors';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  counter: Observable<number>;

  constructor(private store: Store<AppState>, private actions: ExampleActions) {
    this.counter = this.store.select(getCounter);
  }

  increment() {
    this.store.dispatch(this.actions.increment());
  }

  decrement () {
    this.store.dispatch(this.actions.decrement());
  }

  reset () {
    this.store.dispatch(this.actions.reset());
  }

  ngOnInit() { }
}
