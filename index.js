import {fromEvent, interval} from "rxjs";
import {mergeMap, takeUntil} from "rxjs/operators";

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const intervals$ = interval(1000);

mousedown$.pipe(
    mergeMap(() => intervals$.pipe(
        takeUntil(mouseup$)
    ))
).subscribe(console.log);