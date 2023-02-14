const prompt = require(`prompt-sync`)({signt: true});
/*
Log out item at 3rd index "4th item"
If there is no fourth item, log out the last index
*/

console.log(`Enter an array`);
let init = JSON.parse(prompt(`>`));

if(init.length >= 4){
    console.log(init[3]);
}else{
    console.log(init[init.length - 1]);
}