import { ExampleActions } from '../actions/example.actions';
import { ActionReducer, Action } from '@ngrx/store';
import { ExampleState, ExampleStateRecord } from './example.state';

export const initialState: ExampleState = new ExampleStateRecord() as ExampleState;

export const exampleReducer: ActionReducer<ExampleState> = (state: ExampleState = initialState, action: Action ) => {
  switch (action.type) {
    case ExampleActions.INCREMENT: {
      const counter = state.counter;
      return {
        counter: counter + 1
      } as ExampleState;
    }
    case ExampleActions.DECREMENT: {
      const counter = state.counter;
      return {
        counter: counter - 1
      } as ExampleState;
    }
    case ExampleActions.RESET:
      return initialState;
    default:
      return state;
  }
};
