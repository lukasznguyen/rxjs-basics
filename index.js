import {fromEvent} from "rxjs";
import {map, takeWhile} from "rxjs/operators";

const click$ = fromEvent(document, 'click');
click$.pipe(
    map(event => ({
      x: event.clientX,
      y: event.clientY
    })),
    takeWhile(({y}) => y <= 200, true)
).subscribe({
  next: console.log,
  complete: () => console.log('Complete!')
});