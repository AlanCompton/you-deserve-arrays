const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter an array`);
let init = JSON.parse(prompt(`>`));

function isIt(init){
    if(init >= `0` && init <= `9`){
        return true;
    }else{
        return false;
    }
}

console.log(isIt(init));