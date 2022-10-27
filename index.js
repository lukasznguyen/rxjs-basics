import {fromEvent, interval} from "rxjs";
import {concatMap, take} from "rxjs/operators";

const intervals$ = interval(1000);
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    concatMap(() => intervals$.pipe(take(3)))
).subscribe(console.log);