const fs = require('fs');
const args = process.argv.slice(2);

if(args.length != 2) {
    console.error("usage: ./knapsack fileData threshold");
    process.exit(2);
}

let [filename, threshold] = args;

if (isNaN(threshold)) {
    console.error(`threshold must be a number!`);
    process.exit(2);
}

const getData = () => fs.readFileSync(filename, 'utf-8');

const file = getData();
let lines = file.trim().split('\n');

let start = Date.now();
const preProcess = [];  const goodResults = []; const subProcess = [];
const n = lines.length;

console.log(n)

// O(n)
for(let i = 0; i < n; i++) {
    const line = lines[i].split(' '); // O(1)
    preProcess.push(line); // O(1)
    subProcess.push(line); // O(1)
}

let end = Date.now();

console.log('First for 1: ', ((end - start) / 1000).toFixed(4));


start = Date.now();

const saveResults = (dataResults) => {

    return true;
}

let lineTarget = [];



let sizeResult = 0;
let res = [];

function recursiveProcess(){

    const saveTarget = (dataLine, index = 0) => {

        return lineTarget.push({
            'data': dataLine,
            'index': index,
        });

    };

    const myRecursion = (rtr = false, indexTarget = 0) =>  {
        
        for(let i = 0; i < n; i++) {

            if (indexTarget === 0) {
                if (i === 0)

                    saveTarget(preProcess[0], i);

                // console.log('first time',lineTarget[0].data, preProcess[i]);

            } else {
                if (i === 0)
                    saveTarget(preProcess[indexTarget], indexTarget);

                // console.log(lineTarget[indexTarget].data, preProcess[i]);
            }


        }

        if(lineTarget.length > 0){

            if(n === lineTarget.length){
                return;
            }else{

                return myRecursion(false, lineTarget[indexTarget].index + 1);

            }

        }

    };

    return myRecursion();

};

console.log('recursing...');
recursiveProcess();
console.log('Finished');



end = Date.now();

console.log('Process & PreProcess O(n^2): ', ((end - start) / 1000).toFixed(4));

process.exit(0);

// Sum the values of each good combination.
goodResults.forEach(function(el, i) {
    let rsp = 0;
    el.forEach(item => { rsp = parseInt(item[2]) + rsp });
    goodResults[i].push(rsp);
});

// Sorting the good combinations values results ASC
const sortFunction = function(a, b) {
    if (a[a.length-1] === b[b.length-1])
        return 0;
    else
        return (a[a.length-1] < b[b.length-1]) ? -1 : 1;
};

goodResults.sort(sortFunction);

// Pop the last record which should be the highest
const itemToSelect =  goodResults.pop();

console.log('Items to select:');
console.log(itemToSelect);
console.log('');
console.log('Total value:', itemToSelect[itemToSelect.length-1]);

end = Date.now();

console.log('EXCUTION TIME: ', ((end - start) / 1000).toFixed(4));
