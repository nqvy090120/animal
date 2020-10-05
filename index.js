var Tiger = require('./Tiger')
var Mouse = require('./Mouse')
var Bird = require('./Bird')
var tiger = new Tiger('Pooh');
var mouse = new Mouse('Mickey');
tiger.eat(mouse);
console.log(tiger);