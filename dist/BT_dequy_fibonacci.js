"use strict";
function fibonacci(i) {
    if (i < 2)
        return 1;
    return fibonacci(i - 1) + fibonacci(i - 2);
}
let sum = 0;
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log(sum);
