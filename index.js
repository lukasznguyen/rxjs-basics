import {fromEvent, of} from "rxjs";
import {first, map, take} from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
numbers$.pipe(
    take(3)
).subscribe({
  next: console.log,
  complete: () => console.log('Complete!')
});

const click$ = fromEvent(document, 'click');
click$.pipe(
    map(event => ({
      x: event.clientX,
      y: event.clientY
    })),
    take(1)
).subscribe({
  next: console.log,
  complete: () => console.log('Complete!')
});

click$.pipe(
    map(event => ({
      x: event.clientX,
      y: event.clientY
    })),
    first(({y}) => y > 200)
).subscribe({
  next: console.log,
  complete: () => console.log('Complete!')
});