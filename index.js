const userInfo = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `My name is ${userInfo.who.name} and I study at Wild Code School on the ${userInfo.who.campus} campus !`,
    e : "oO",
    T : "U ",
}));