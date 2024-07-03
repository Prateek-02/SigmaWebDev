for(let i=1;i<=20;i++){
    if(i == 5){
        console.log(`Detected 5`);
        break;    // loop will break here and we will come out of the loop
    }
    console.log(`Value of i is: ${i}`);
}


for(let i=1;i<=20;i++){
    if(i == 5){
        console.log(`Skipped 5`);
        continue;    // it will skip the particular value
    }
    console.log(`Value of i is: ${i}`);
}