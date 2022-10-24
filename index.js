import {from} from "rxjs";

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete!')
};

// arrays => observable
const source$ = from([1, 2, 3, 4, 5]);
source$.subscribe(observer);
const sourceTwo$ = from('Hello');
sourceTwo$.subscribe(observer);

//promises => observable
const sourceThree$ = from(fetch('https://api.github.com/users/octocat'));
sourceThree$.subscribe(observer);

//iterator => observable
function* hello() {
  yield 'Hello';
  yield 'World';
}

const iterator = hello();
console.log(iterator.next().value);
console.log(iterator.next().value);

const sourceFour$ = from(iterator);
sourceFour$.subscribe(observer);