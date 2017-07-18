import { ExampleState } from './example.state';
import { AppState } from '../../app.state';
import { createSelector } from 'reselect';

// Base Search state
function getSearchState(state: AppState): ExampleState {
  return state.example;
}

// Individual Selectors
function fetchCounter(state: ExampleState): number {
  return state.counter;
}

// Public API's
export const getCounter = createSelector(getSearchState, fetchCounter);
