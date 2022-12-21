function sum(){
let q =0;
   return function sum1(step){
q = q + step
console.log(q);
   }
}

let fn = sum();
fn(3);
fn(5);
fn(228);
