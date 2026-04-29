let age =18;
if(age==18){
    let message = "approved";
    var print = "ok";
    const mes="k";
}
//console.log(message);
console.log(print);
//console.log(mes);
function makeCounter(){
    let count =0;
    return {
        increment(){
          count++;
        },
        decrement(){
            count--;
        },
        getcount(){
            return count;
        }

    };
}
let counter = makeCounter();
console.log(counter.getcount());
console.log(counter.count);
function makeMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
let double=makeMultiplier(2);
let triple = makeMultiplier(3);
console.log(double(5));
console.log(triple(5));
for(var a=0;a<10;a++){
    setTimeout(()=>{console.log(a)},2000);
}
function makeGreeter(gretter){
        return function(name){
        console.log(`${gretter} ${name}`);
        }
    };
let greetenglish = makeGreeter("hello");
let greethindi = makeGreeter("NAMASTE");
greetenglish("abhilash");
greethindi("abhilash");
