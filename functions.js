/*jshint esversion: 6 */
zero= (n) => n ? eval(0 + n) : 0;
one=(n)=> n ? eval(1 + n) : 1;
two=(n)=> n ? eval(2 + n) : 2;
three=(n)=> n ? eval(3 + n) : 3;
four=(n)=> n ? eval(4 + n) : 4;
five=(n)=> n ? eval(5 + n) : 5;
six=(n)=> n ? eval(6 + n) : 6;
seven=(n)=> n ? eval(7 + n) : 7;
eight=(n)=> n ? eval(8 + n) : 8;
nine=(n)=> n ? eval(9 + n) : 9;

plus=(n)=> '+' + n;
minus=(n)=>  '-' + n;
times=(n)=>  '*' + n;
dividedBy=(n)=>  '/' + n;

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
