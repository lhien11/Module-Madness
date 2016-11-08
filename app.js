var http = require('http');
var balance = require('./modules/balance');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(balance.printBalance() + balance.randomMoney(100,1000000) + ' ');
    res.end();
}).listen(3000);

console.log("listening on port 3000");
