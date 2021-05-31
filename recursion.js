// two points: base case and different inputs

// Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }
 
 sumRange(4)

 // Iterative Version
 function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

// Recursive Version
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
