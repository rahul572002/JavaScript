const accountId = 144553;
let accountEmail = "rahulpushpakar@gmail.com"
var accountPassword = "12345"
accountCity = "Prayagraj"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "hkjkds@gmail.com"

accountPassword = "31322"
accountCity = "Benguluru"

console.log(accountId);

/*

Prefer not to use var 
because of issue in block scope and functional scope

*/


console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);