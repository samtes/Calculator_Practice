console.log('Welcome to your Calculator app!');

var menu = 'To ADD (+), To SUBTRACT (-), To MULTIPLY (*), To DIVIDE (/), To POWER (p), To FACTORIAL (!) or To QUIT (q)';
var operator = prompt(menu);

//Below are all the functions we need for this assignment....

function add(x, y){
return x + y;
}

function sub(x, y){
return x - y;
}

function mul(x, y){
return x * y;
}

function div(x, y){
if (y == 0){
return 'Undefined'}
else {
  return x/y;
 }
}

function pow(x, y){
result = 1;
for (var i = 0; i < y; i++){
result = result * x;
}
return result;
}

function fac(x){
result = 1;
for (var i = 1; i <= x; i++){
result = result * i;
}
return result;
}

// ---------------------------------------------------------- //
// Below is the code that will run run the functions defined above...


while (operator != 'q'){

var result;

switch(operator){
  case '+':
    var x = parseInt(prompt('Enter the first number'));
    var y = parseInt(prompt('Enter the second number'));
    result = add(x, y);
    break;

  case '-':
    var x = parseInt(prompt('Enter the first number'));
    var y = parseInt(prompt('Enter the second number'));
    result = sub(x, y);
    break;

  case '*':
    var x = parseInt(prompt('Enter the first number'));
    var y = parseInt(prompt('Enter the second number'));
    result = mul(x, y);
    break;

  case '/':
    var x = parseInt(prompt('Enter the first number'));
    var y = parseInt(prompt('Enter the second number'));
    result = div(x, y);
    break;

  case 'p':
    var x = parseInt(prompt('Enter the first number'));
    var y = parseInt(prompt('Enter the second number'));
    result = pow(x, y);
    break;

  case '!':
    var x = (prompt('Enter number'));
    result = fac(x);
}
console.log(result);
var operator = prompt(menu);
}
console.log('Thank you & have a nice day!');


//--------------- End of the Code ------------//




