var readlineSync = require("readline-sync");

var chalk = require("chalk");

//input
var username = readlineSync.question("Hi, What's your name? \n");

console.log();

console.log(chalk.green("Welcome " + username.toUpperCase()));

console.log(chalk.yellow("\tLets see, whether your Birthday is prime or not?\n"));

var birthDate = readlineSync.question("Enter your Date of Birth (in DD format) ");

console.log();
if(isNaN(birthDate)){
  console.log(chalk.bgCyan("Invalid Input!, you did not mention your Date of Birth"));
} 
else{
prime(birthDate);
}

//processing
function prime(birthDate){
  var flag = true;
  if(birthDate > 31){
    console.log(chalk.bgCyan(birthDate + " is not a valid Birth Date."));
  } 
  else if(birthDate <= 0){
    console.log(chalk.bgCyan(birthDate + " is not a valid Birth Date."));
  }
  else{
  if(birthDate === 1){
    console.log(chalk.bgCyan(birthDate + " is neither prime nor composite."));
  }
  else {
    for(var i = 2; i <= (birthDate/2); i++){
      // condition for non-prime
      if(birthDate % i === 0){      
        flag = false;
        break;
      }
    }

    if(flag === true){
      console.log("##########"); 
      console.log(chalk.green.bold("Nice! " + username.toUpperCase() + ", Your birth day " + birthDate + " is a prime number " + "\nPlease share it on social media, so that other people can know it"));
      console.log("##########");
    }
    else{
      console.log(chalk.bgCyan(birthDate + " is not a prime number."));
    }
  }
  }
}

console.log();
console.log("---end---");