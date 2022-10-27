import {fromEvent, interval} from "rxjs";
import {debounceTime, pluck, distinctUntilChanged, debounce} from "rxjs/operators";


//streams
const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000)
).subscribe(console.log);

//elements
const inputBox = document.getElementById('text-input');
const input$ = fromEvent(inputBox, 'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);

input$.pipe(
    debounce(() => interval(1000)),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);