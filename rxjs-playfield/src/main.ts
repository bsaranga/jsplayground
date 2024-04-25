import { fromEvent } from "rxjs";

let count = 0;
let limit = 5;
const observer = fromEvent(document, "click");

const sub = observer.subscribe(() => {
  count++;
  console.log(count);
  if (count === limit) {
    console.log("Clicked 5 times");
    sub.unsubscribe();
  }
});