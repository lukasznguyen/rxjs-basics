import {interval, timer} from "rxjs";

// interval starts emitting after delay ex. after 1s every 1s emit
const timer$ = interval(1000);
timer$.subscribe(console.log);

// timer - start immediately then emit every 1s
const timer2$ = timer(0, 1000);
timer2$.subscribe(console.log);

// timer - start after 2s then emit every 1s
const timer3$ = timer(2000, 1000);
timer3$.subscribe(console.log);

// timer - emit value after 2s then stop
const timer4$ = timer(2000);
timer4$.subscribe(console.log);