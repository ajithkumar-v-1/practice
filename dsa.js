// let a = 10;
// let b = 20;
// console.log(a+b);

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
  
    })


    const userinput = [];
    rl.on('line', (input) => {
    userinput.push(input);
    })
    rl.on('close', () => {
   let numbers = userinput[0].split(' ').map(Num => Number(Num));
   let target = Number (userinput[1]);
    //  1. generate all possible pairs from the array
    for (let i = 0; i < numbers.length -1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // 2. check if the sum of the pair is equal to the target
            let pairsum= (numbers[i] + numbers[j])
            if (pairsum === target) {
            
    // 3. if yes, return the pair

             console.log ()
            }
             

        }
    }
    
   
    })
    

    let a 