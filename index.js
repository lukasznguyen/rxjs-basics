import {calculateMortgage} from "./calculate-mortgage";
import {combineLatest, fromEvent, of} from "rxjs";
import {delay, filter, map, mergeMap, share, tap} from "rxjs/operators"

const loanAmount = document.getElementById('loanAmount');
const interest = document.getElementById('interest');
const loanLength = document.querySelectorAll('.loanLength');
const expected = document.getElementById('expected');

//helpers
const createInputValueStream = elem => {
  return fromEvent(elem, 'input').pipe(
      map(event => parseFloat(event.target.value))
  )
}

const saveResponse = mortgageAmount => {
  return of(mortgageAmount).pipe(
      delay(1000)
  )
}

// streams
const interest$ = createInputValueStream(interest);
const loanLength$ = createInputValueStream(loanLength);
const loanAmount$ = createInputValueStream(loanAmount);

const calculation$ = combineLatest(
    interest$,
    loanAmount$,
    loanLength$
).pipe(
    map(([interest, loanAmount, loanLength]) => {
      return calculateMortgage(interest, loanAmount, loanLength);
    }),
    tap(console.log),
    filter(mortgageAmount => !isNaN(mortgageAmount)),
    share()
);

calculation$.subscribe(mortgageAmount => {
  expected.innerHTML = mortgageAmount;
})

calculation$.pipe(
    mergeMap(mortgageAmount => saveResponse(mortgageAmount))
).subscribe()