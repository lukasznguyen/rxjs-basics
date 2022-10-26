import {from} from 'rxjs';
import {scan, map} from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

from(numbers).pipe(
    scan((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
).subscribe(console.log);

const user = [
  {name: 'Brain', loggedIn: false, token: null},
  {name: 'Brain', loggedIn: true, token: 'abc'},
  {name: 'Brain', loggedIn: true, token: '123'},
];

const state$ = from(user).pipe(
    scan((accumulator, currentValue) => {
      return { ...accumulator, ...currentValue};
    }, {})
);

const name$ = state$.pipe(
    map(state => state.name)
);

name$.subscribe(console.log);