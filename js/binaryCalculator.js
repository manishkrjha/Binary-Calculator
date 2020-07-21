// let operator = document.getElementsByClassName('operator');
let plus = document.getElementById('btnSum');
let minus = document.getElementById('btnSub');
let into = document.getElementById('btnMul');
let divide = document.getElementById('btnDiv');
let resultBox = document.getElementById('res');

// var val1 = [];
// var val2 = [];
var val1;
var val2;
var clicked = false;

plus.addEventListener("click", function(){
    clicked = true;
    let middleOperator = '+';
    resultBox.innerHTML += ' + ';
});

minus.addEventListener("click", function(){
    clicked = true;
    let middleOperator = '-';
    resultBox.innerHTML += ' - ';
});

into.addEventListener("click", function(){
    clicked = true;
    let middleOperator = '*';
    resultBox.innerHTML += ' * ';
});

divide.addEventListener("click", function(){
    clicked = true;
    let middleOperator = '/';
    resultBox.innerHTML += '/';
});

function pushZero(){
    if(clicked){
        //if middleOperator is pressed
        // val2.push(0);
        resultBox.innerHTML += '0';
        val2 = resultBox.innerText;
    }else{
        //if middleOperator is not pressed
        // val1.push(0);
        resultBox.innerHTML += '0';
        val1 = resultBox.innerText;
    }    
}

function pushOne(){
    if(clicked){
        //if middleOperator is pressed
        // val2.push(1);
        resultBox.innerHTML += '1';
        val2 = resultBox.innerText;
    }else{
        //if middleOperator is not pressed
        // val1.push(1);
        resultBox.innerHTML += '1';
        val1 = resultBox.innerText;
    }    
}

//passing array to this function
function binaryToNum(a){
    let num = 0;
    for(var i=0; i<a.length; i++){
       num +=  a[i]*Math.pow(2, a.length-i-1);
    }

    return num;
}

//Function to convert a number to binary
// function numToBinary(x){
//     var s='';
//     let n;
//     while(x>=1){
//         n = x%2;
//         s += `$`;
//         x /= 2;
//     }
 
//     // s = 'ans';
//     return s;
// }

function result(middleOperator){
    var ans;
    var num1 = binaryToNum(val1);
    var num2 = binaryToNum(val2);

    if(middleOperator == '+'){
        ans = num1 + num2;
    }

    if(middleOperator == '-'){
        ans = num1 - num2;
    }

    if(middleOperator == '*'){
        ans = num1*num2;
    }

    if(middleOperator == '/'){
        ans = num1/num2;
    }

    var output = ans;
    
    resultBox.innerHTML = output;
}

// function clear(){
//     val1 = [];
//     val2 = [];
//     clicked = false;
//     resultBox.innerHTML = ' ';
// }


