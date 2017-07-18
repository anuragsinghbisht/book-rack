import { List, Record, Map } from 'immutable';

export interface ExampleState extends Map<string, any> {
  counter: number;
}

export const ExampleStateRecord = Record({
  counter: 0
});
