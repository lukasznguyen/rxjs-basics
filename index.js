import {fromEvent, timer} from "rxjs";
import {ajax} from "rxjs/ajax";
import {
  exhaustMap,
  finalize,
  pluck,
  switchMapTo,
  takeUntil,
  tap
} from "rxjs/operators";

// elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pollingStatus = document.getElementById('polling-status');
const dogImage = document.getElementById('dog');

//streams
const startClick$ = fromEvent(startButton, 'click');
const stopClick$ = fromEvent(stopButton, 'click');

startClick$.pipe(
    // map to interval
    exhaustMap(() => timer(0, 5000).pipe(
        tap(() => pollingStatus.innerHTML = 'Active'),
        switchMapTo(
            ajax.getJSON(
                'https://random.dog/woof.json'
            ).pipe(
                pluck('url')
            )
        ),
        takeUntil(stopClick$),
        finalize(() => pollingStatus.innerHTML = 'Stopped')
    ))
).subscribe(url => dogImage.src = url);