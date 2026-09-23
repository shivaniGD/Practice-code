/*onsole.log(typeof "jack");
console.log(typeof 500);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 1234568n);
console.log(typeof {name: "jas", roll:23});
console.log(typeof true);
let name= "jack";
console.log(name);
let number = 500;
console.log(number);
let bool = true;
console.log(bool);
let bignumber = 1234568n;
console.log(bignumber);
//string to no.
Number("100");
//number to string
String(20);
//arithmatic 
console.log(2+2);
console.log(2-2);
console.log(10/2);
console.log(30%3);
console.log(2 ** 30);
console.log("5" + 2);
console.log("10" - 2);
console.log("40" * 2);

//string to number
let no= Number("100"); //output : 100
//no to string 
console.log(no);
char = String(100); //output:"100"
console.log(char);


//comparison
console.log( true == 1);
console.log( false == 0);
console.log("1" == 1);
//strick equlity(use always ===)
//!= loss equality , (use !== )
console.log( "1"=== 1); //output false 
//comparision pperator , < , >  =< =>
console.log(5 < 3);
let age = 18;
console.log(age >= 18);
console.log(age < 18);*/


//logical operator
//AND both condition must be  true then only answer true
/*true && true = true
false && true = false
false && false = false
true && false = false
 let emailcorrect = false;
 let passwordcorrect = false;

if (emailcorrect && passwordcorrect){
    console.log("login success");
}else{
    console.log("login Failed");
}
// OR Opertaor ||(any one should be true and if both false ans false)

 
// NOT
// true > false, false > true 
let isloggenin = false;
if(!isloggenin){
    console.log("login First");
}
//  write code in the  browser console
let age = (prompt("Enter ur age : "))
let a = (prompt("Enter a num : ")) +  let b = (prompt("enter 2ne num : "));
let c = (a + b);
console.log(c);*/


let a = Number(prompt("Enter value for A:"));
let b = Number(prompt("Enter value for B:"));
let c = Number(prompt("Enter value for C:"));
let d = Number(prompt("Enter value for D:"));
let first = prompt("Choose first num(a, b, c, d):");
let second = prompt("Choose second num(a, b, c, d):");
let num1, num2;
if (first == "a") {
    num1 = a;
} else {
    if (first == "b") {
        num1 = b;
    } else {
        if (first == "c") {
            num1 = c;
        } else {
            if (first == "d") {
                num1 = d;
            } else {
                console.log("invalid first choice");
            }
        }
    }
}

if (second == "a") {
    num2 = a;
} else {
    if (second == "b") {
        num2 = b;
    } else {
        if (second == "c") {
            num2 = c;
        } else {
            if (second == "d") {
                num2 = d;
            } else {
                console.log("invalid second choice");
            }
        }
    }
}
let op = prompt("Enter operation (+, -, *, /, %, **):");

if (op == "+") {
    console.log("Result = " + (num1 + num2));
} else {
    if (op == "-") {
        console.log("result = " + (num1 - num2));
    } else {
        if (op == "*") {
            console.log("result = " + (num1 * num2));
        } else {
            if (op == "/") {
                if (num2 != 0) {
                    console.log("result = " + (num1 / num2));
                } else {
                    console.log("Division by zero is not allowed.");
                }
            } else {
                if (op == "%") {
                    console.log("result = " + (num1 % num2));
                } else {
                    if (op == "**") {
                        console.log("result = " + (num1 ** num2));
                    } else {
                        console.log("ivnvalid operation.");
                    }
                }
            }
        }
    }
}