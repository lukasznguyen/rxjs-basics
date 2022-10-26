import {interval} from "rxjs";
import {filter, mapTo, scan} from "rxjs/operators";

// elements refs
const countdown = document.getElementById('countdown');
const message = document.getElementById('message');

// stream
const counter$ = interval(1000);

counter$.pipe(
    mapTo(-1),
    scan((accumulator, current) => {
      return accumulator - 1;
    }, 10),
    filter(value => value >= 0)
).subscribe(value => {
  countdown.innerHTML = value;
  if (!value) {
    message.innerHTML = 'Liftoff!!';
  }
});