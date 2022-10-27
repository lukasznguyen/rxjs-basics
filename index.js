import {empty, interval} from 'rxjs';
import {concat, delay, startWith} from "rxjs/operators";

const interval$ = interval(1000);
const delayed$ = empty().pipe(delay(1000));

delayed$.pipe(
    concat(
        delayed$.pipe(startWith('3....')),
        delayed$.pipe(startWith('2....')),
        delayed$.pipe(startWith('1....')),
        delayed$.pipe(startWith('Go!'))
    ),
    startWith('Get ready!')
).subscribe(console.log);