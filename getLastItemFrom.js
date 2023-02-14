const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter an array `);
let init = JSON.parse(prompt(`>`));

let lastLength = init.length;
let lastItem = lastLength -1;

console.log(init[lastItem]);