var readlineSync = require("readline-sync");

var chalk = require("chalk");

//input
var username = readlineSync.question("Hi, What's your name? \n");

console.log();

console.log(chalk.green("Welcome " + username.toUpperCase()));

console.log(chalk.yellow("\tLets see, whether your Birthday is prime or not?\n"));

var dob = prompt("Enter your Date of Birth? (in DD/MM format)\n");

var dd = "";
var mm = "";
for(var i = 0; i < dob.length; i++){
  // for date
  dd = dob[0] + dob[1];
  // for month
  mm = dob[3] + dob[4];  
}

format = dd + "/" + mm;
dd = parseInt(dd);
mm = parseInt(mm);

if(mm === 2 && dd >= 30 ){
  console.log(chalk.bgCyan("Invalid Input!, Its a February month"));
}
else if(dd > 31){
  console.log(chalk.bgCyan("Invalid Input!, Date is more than 31"));  
}
else if(mm > 12){
  console.log(chalk.bgCyan("Invalid Input!, Month is more than 12"));  
}
else if(dd < 1){
  console.log(chalk.bgCyan("Invalid Input!, Date is less than 1"));
}
else if(dob != format){
  console.log(chalk.bgCyan("Invalid Input!"));
}
else{  
  prime(dd);
}

//processing
function prime(birthDate){
  var flag = true;
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
      console.log(chalk.bgYellow(birthDate + " is not a prime number."));
    }
  }
}

console.log();
console.log("---end---");