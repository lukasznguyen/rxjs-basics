import {fromEvent, interval} from "rxjs";
import {switchMap} from "rxjs/operators";

const intervals$ = interval(1000);
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    switchMap(() => intervals$)
).subscribe(console.log);