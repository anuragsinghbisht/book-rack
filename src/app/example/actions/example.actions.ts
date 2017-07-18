import { Action } from '@ngrx/store';

export class ExampleActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  static RESET = 'RESET';

  increment(): Action {
    return { type: ExampleActions.INCREMENT };
  }

  decrement(): Action {
    return { type: ExampleActions.DECREMENT };
  }

  reset(): Action {
    return { type: ExampleActions.RESET };
  }
}
