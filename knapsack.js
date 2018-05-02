const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length != 2) {
    console.error("usage: ./knapsack fileData threshold");
    process.exit(2);
}

let [filename, threshold] = args;
const filePath = path.resolve(__dirname, filename);

if (fs.existsSync(filePath)) {

    console.log('Ready to process file', filePath);

    

}

if (isNaN(threshold)) {
    console.error(`threshold must be a number!`);
    process.exit(2);
}

threshold = ~~Number(threshold);