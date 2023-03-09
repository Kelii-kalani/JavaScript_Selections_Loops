console.log("Hello World!\n==========\n");
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i%2 == 0){
        console.log(i);
        continue;
    }
}
console.log("EXERCISE 2:\n==========\n");
for (let i =1; i <= 100; i++){
    
    if (i%3 == 0 && i%5 == 0){
        console.log("FIZZBUZZ");
    }
    else if (i%3 == 0){
        console.log("FIZZ");
    }
    else if (i%5 == 0){
        console.log("BUZZ");
    }
    else{
        console.log(i)
    } 
}
console.log("EXERCISE 3:\n==========\n");
//exercise 1
let j = 1;
while (j <= 100){
    if (j%2 == 0){
        console.log(j);
    }
    j++;
}
console.log("EXERCISE 3 pt 2:\n==========\n");
//exercise 2
let i = 1;
do{
    
    if (i%3 == 0 && i%5 == 0){
        console.log("FIZZBUZZ");
    }
    if (i%3 == 0){
        console.log("FIZZ");
    }
    if (i%5 == 0){
        console.log("BUZZ");
    }
    else{
        console.log(i);
    }
    i++;
}
while (i <= 100)
console.log("EXERCISE 4:\n==========\n");
// creates a random number between 0 and 500
let value = Math.round((Math.random() * 500)); 
// creates a random number between 100 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++){
    if (i == value){
        console.log("Found value!");
        break;
    }
    else{
        console.log("Did not find value");
    }
}
console.log("EXERCISE 5:\n==========\n");
//let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//let k = Math.round(Math.random() * (1000 - 1) + 1);
//let start = Math.round(Math.random() * (10 - 1) + 1);

//for (let i = start; i <= k; i++){
    
    //if (i%fizzDivisor == 0){
        //console.log("FIZZ");
    //}
    //if (i%buzzDivisor == 0){
        //console.log("BUZZ");
    //}
    //else{
        //console.log(i);
    //}
//}