const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter an array`);
let init = JSON.parse(prompt(`>`));

console.log(init[2][1]);