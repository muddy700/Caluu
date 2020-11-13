// < !--------------------------------------------This App Develeped By Muddy(Optimist#700)------------------------------------------------------------->
// < !------------------------------------------------------All Rights Reserved--------------------------------------------------------------------------->

//JavaScript Codes For Caluu App

//Global Declarations
var Display = document.getElementById("Display-Area");  //-----Takes The Control Of The Display Area Using Id
var TimeArea = document.getElementById("Time-Area");  //------Takes The Control Of The Time Area Using Id
var Buttons = document.querySelectorAll(".Buttons");  //-----Takes The Control Of The Button Area Using Class Of The Buttons
var switchButton = document.getElementById("Power");  //----Takes The Control Of The Power Button Using Id Of A Buttons
var rootSign = document.getElementById("BtnRoot");  //-----Takes The Symbol Of Root

rootSign = rootSign.value; //------------Assigns The Symbol To rootSign Variable 
var firstNumber = '';   //-------------Variable For Holding The First Operand Of The Operation
var secondNumber = '';  //------------Variable For Holding The Second Operand Of The Operation  If Any   
var operation = '';  //------------Variable For Holding The Underlying Operation
var setKey = 2;   //-------------Variable That Trigger The On And Off Operation
var firstOperand; //------------Variable For Holding The First Operand For Generating History
var secondOperand; //---------Variable For Holding The Second Operand For Generating History
var Answer = '';  //---------Variable For Holding The Answer Of Operation For Generating History
var sign;    //------------Variable For Holding The Operation Sign For Generating History

var screenError = ' ';    //-------------Variable That Triggers The Function For Clearing The Screen-Errors
var operationCounter = ''; //------------Variable For Limiting Multiple Consecutive Operations
var dotCounter;
var historyCaller ;
var turn ;

//Function That Disable Buttons OnLoad
function switchOff(){

    for (var a = 0; a < Buttons.length; a++) {

        Buttons[a].disabled = true;

    }

    switchButton.style.backgroundColor = "lightgreen";
    switchButton.value = "ON";
    Display.value = "Power On To Use   ";


}   //OnLoad Function Ends Here

 
//Function For On And Off Caluu
function onOff() {

    if (setKey === 1) {

        var status = true ;
        setKey = 2;
        switchButton.style.backgroundColor = "lightgreen";
        switchButton.value = "ON";
        Display.value = "Power On To Use    ";

    } 

    else {

        status = false ;
        setKey = 1;
        switchButton.style.backgroundColor = "red";
        switchButton.value = "OFF";
        Display.value = "Welcome!          ";
        screenError = '1';
    }

    for(var a = 0 ; a< Buttons.length ; a++){

    Buttons[a].disabled = status;
    
    }
        }  //On And Off function Ends Here

//Function That Sets Time
function time(){ 

    var CurrentDate = new Date();
    var ShowDate = CurrentDate.toLocaleTimeString();
    TimeArea.innerHTML = ShowDate;

 }   //Time Function Ends Here

 //It Calls Time Function After Every 1000 milliseconds Second To Change Seconds In Time
setInterval(time , 1000);

//Function That Deletes Individual Character
function clearScreen(){

    Display.value = Display.value.substring(0 , Display.value.length-1);

}  //Delete Function Ends Here

//Function That Clear The Whole Screen At Once
function screenFlash(){

    Display.value = '';
    operationCounter = '';

}  //Clear Function Ends Here

//Function That Clear Eror Messages And Other Messages On The Screen
function clearError(){

    if(screenError === '1' ){

        Display.value = '';
        operationCounter = '';
        dotCounter = '';

    }

    screenError = '';

}  //Error Function Ends Here

//Function That Assign Operators On The Screen
function assignOperator(optn){

    //For + - x / ^ % 
    var x = Display.value;
    var lastSign = x.charAt(x.length - 1);

    //For Log
    var lastSign2 = x.substring(x.length-3);

    //For SquareRoot
    var lastSign3 = x.substring(x.length - 1);

    //Condition That Avoid Consecutive Operators
    if (lastSign === '+' || lastSign === '-' || lastSign === 'x' || lastSign === '/' || lastSign === '^' || lastSign === '%' || lastSign2 === 'log' || lastSign3 === rootSign) {

        Display.value = "Syntax Error!        ";
            screenError = '1' ;
    }

    else if (operationCounter ==='1') {

        if (Display.value.charAt(0) === '-') {
            Display.value+= optn ;
        }
        
    else {
            
        Display.value = 'No Nested Operations  ';
        screenError = '1';

        }
    }

    else if (optn === 'x') {

        Display.value += 'x';

    }

    else if (optn === '/') {

        Display.value += '/';

    }

    else if (optn === '+') {

        Display.value += '+';

    }

    else if (optn === '-') {

        Display.value += '-';

    }

    else if (optn === 'log') {

        Display.value = 'log';
        
    }

    else if (optn === '^') {

        Display.value += '^';
        
    }

    else if (optn === '%') {

        Display.value += '%';
        
    }

    else if (optn === 'sqrt') {

        Display.value = rootSign;

    }

    operationCounter = '1';
    
}

function checkHistory(){
    if (Answer ==='') {
        Display.value = "No History Yet     ";
    }

    else if (historyCaller = 'others' && turn === '1') {
        Display.value = firstOperand + sign + secondOperand + " = " + Answer;
    }


    else if ( turn === '2' ) {
        Display.value = sign + firstOperand +") = " + Answer;
    }

    else if (turn === '3'  ) {
        Display.value = sign + firstOperand + ") = " + Answer;
    }
    screenError = '1';

 }   //Operator Assignment Function Ends Here

//<------------------------ Functions That Trigger Operation Signs Depending On The Action Sign ------------------------->

//For Power
function powerOperation() {

    firstNumber = Display.value;
    operation = "power";

}

//For Log
function logOperation() {

    firstNumber = "3";
    operation = "log";

}

//For Dot
function dotOperator() {

    var x = Display.value;
    var lastSign = x.charAt(x.length - 1);

    if (lastSign === '.' || dotCounter === '1') {

        Display.value = "Syntax Error!        ";
        screenError = '1';
    }

    else if (lastSign === '' ){
        Display.value += '0.';
    }
    else{

        Display.value += '.';
        dotCounter = '1';

    }

}

//ForSquareRoot
function squareRootOperation() {

    operation = "root";
    firstNumber = "6";

}

//For Sum
function sumOperation(){

    firstNumber = Display.value;
    operation = "add";

}

//For Minus
function minusOperation() {

     firstNumber = Display.value;
    operation = "minus";  

}

//For Times
function timesOperation() {

    firstNumber = Display.value;
    operation = "times";

}

//For Division
function divisionOperation() {

    firstNumber = Display.value;
    operation = "div";

}

//For Modulus
function modulusOperation() {

    firstNumber = Display.value;
    operation = "mod";

}

//<------------------------ Functions That Trigger Operation Signs End Here ------------------------->

//<------------------------ Function That Perfoms All Mathematical Operations ----------------------->

function result(){

    secondNumber = Display.value.substring(firstNumber.length+1);  //Asign The Value To second Number
    firstNumber = parseFloat(firstNumber);  //Convert The String Into Float. Because The Html Element That Received The Values Was input
    secondNumber = parseFloat(secondNumber);   //The Same As In First Number
    
    operationCounter = '';  
    dotCounter = '';

     if (operation === '') {  //If No operator Pressed

    }


    //If Second Number Is NaN(Not A Number) And Is Required For Operation To Complete 
     else if (isNaN(secondNumber) && (operation === 'add' || operation === 'times' || operation === 'minus' || operation === 'div' || operation === 'mod' || operation === 'power') ) {

        Display.value = 'Math Error!          ';
        screenError = '1';

     }

     //If First Number Is NaN(Not A Number) And Is Required For Operation To Complete 
     else if (isNaN(firstNumber) && (operation === 'power' || operation === 'mod')) {

         Display.value = 'Math Error!          ';
         screenError = '1';
     }

     //For Addition 
    else  if (operation === "add") {

        Display.value = firstNumber + secondNumber;
        firstOperand = firstNumber ;
        secondOperand = secondNumber ;
        Answer = Display.value ;
        sign = " + ";
        historyCaller = 'others';
        turn = '1';

    }

    //For Substruction
    else if (operation === "minus") {

        Display.value = firstNumber - secondNumber;
        firstOperand = firstNumber;
        secondOperand = secondNumber;
        Answer = Display.value;
        sign = " - ";
         historyCaller = 'others';
         turn = '1';

    }

    //For Multiplication
    else if (operation === "times") {

        Display.value = firstNumber * secondNumber;
        firstOperand = firstNumber;
        secondOperand = secondNumber;
        Answer = Display.value;
        sign = " x ";
         historyCaller = 'others';
         turn = '1';

    }

    //For Division
    else if (operation === "div") {

        if ( secondNumber === 0  ) { //Avoid Number / Zero

            Display.value = "Math Error!        ";
            screenError = '1';

        } 

        else {

            Display.value = firstNumber / secondNumber;
            firstOperand = firstNumber;
            secondOperand = secondNumber;
            Answer = Display.value;
            sign = " / ";
            historyCaller = 'others';
            turn = '1';

        }
    }

    //For Power
    else if (operation === "power") {

        Display.value = Math.pow(firstNumber, secondNumber);
        firstOperand = firstNumber;
        secondOperand = secondNumber;
        Answer = Display.value;
        sign = " ^ ";
         historyCaller = 'others';
         turn = '1';


    }

    //For Modulus
    else if (operation === "mod") {

        Display.value = firstNumber % secondNumber;
        firstOperand = firstNumber;
        secondOperand = secondNumber;
        Answer = Display.value;
        sign = " % ";
         historyCaller = 'others';
         turn = '1';


    }

    //For Log
    else if (operation === "log") {

        firstNumber = Display.value.substring(firstNumber);
        firstNumber = parseFloat(firstNumber);

         if (isNaN(firstNumber)) {  //Avoid Log Of A NaN Operand

             Display.value = "Math Error!        ";
             screenError = '1';
            
        }

        else{

        Display.value = Math.log10(firstNumber);
        firstOperand = firstNumber;
        Answer = Display.value;
        sign = " log(";
        // historyCaller = 'log';
             turn = '2';

        }
    }

    //For Square Root
    else if (operation === "root") {

        firstNumber = Display.value.substring(1);
        firstNumber = parseFloat(firstNumber);
        Display.value = Math.sqrt(firstNumber);
        firstOperand = firstNumber;
        Answer = Display.value;
        sign = rootSign + "(";
        // historyCaller = 'root';
         turn = '3';

    }

    else if (firstNumber === '') {

    }

    //For Default Option
     else {

        Display.value = "Operation Not Found!  ";
        screenError = '1';
        
    }


}  //<------------------------ Result Function Ends Here ----------------------->

// function closeapp(){

//     window.close();
// }

//RollBack Point For TroubleShooting The Caluu  Program



// < !--------------------------------------------This App Develeped By Muddy(Optimist#700)------------------------------------------------------------->
// < !------------------------------------------------------All Rights Reserved--------------------------------------------------------------------------->
