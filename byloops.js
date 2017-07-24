var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');

var wallet = 1000
var store ["sword","food"];
var price = [500,100]


while(wallet>0){
    var purchasechoice = prompt ("what're you buyin'");
    if(purchaceChoice == store[0]){
     wallet = wallet - prices[0]; 
     inventory.push("sword");
    }
    else if(purchaceChoice == store[1]){
         wallet = wallet - price [1]
         inventory.push("food");
    }
    else{
        console.log("Game OVER!!");
    }

    console.log(inentory)
}
