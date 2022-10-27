import {fromEvent, interval} from "rxjs";
import {sampleTime, map, sample} from "rxjs/operators";

//streams
const click$ = fromEvent(document, 'click');

click$.pipe(
    sampleTime(4000),
    map(({clientX, clientY}) => ({
      clientX, clientY
    }))
).subscribe(console.log);

const timer$ = interval(1000);
timer$.pipe(
    sample(click$)
).subscribe(console.log);