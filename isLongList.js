const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter an array`);
let init = JSON.parse(prompt(`>`));

function less(init){
    if(init.length >= 10){
        return true;
    }else{
        return false;
    }
}

console.log(less(init));