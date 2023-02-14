const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter an array`);
let init = JSON.parse(prompt(`> `));

let firstItem = init[0];

console.log(firstItem);