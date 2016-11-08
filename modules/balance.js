var money = require('./money');
var randomNumber = require('./random');

var randomMoney = function (min, max){
    return money(randomNumber(min, max));
};

var printBalance = function(){
    return 'Account balance: ';
};




exports.randomMoney = randomMoney;
exports.printBalance = printBalance;