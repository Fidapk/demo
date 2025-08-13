function calculate(a,b,operation){
    return operation(a,b)
}
// addition
function add(x,y){
    return x+y;
}
// subtraction
function subtract (x,y){
    return x-y
}
// higher oder function
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));