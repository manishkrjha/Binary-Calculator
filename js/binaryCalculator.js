// let operator = document.getElementsByClassName('operator');
let plus = document.getElementById('btnSum');
let minus = document.getElementById('btnSub');
let into = document.getElementById('btnMul');
let divide = document.getElementById('btnDiv');
let resultBox = document.getElementById('res');

var val1 = [];
var val2 = [];
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
        val2.push(0);
        resultBox.innerHTML += '0';
    }else{
        //if middleOperator is not pressed
        val1.push(0);
        resultBox.innerHTML += '0';
    }    
}

function pushOne(){
    if(clicked){
        //if middleOperator is pressed
        val2.push(1);
        resultBox.innerHTML += '1';
    }else{
        //if middleOperator is not pressed
        val1.push(1);
        resultBox.innerHTML += '1';
    }    
}

//passing array to this function
function binaryToNum(a){
    let num = 0;

    for(var i=0; i<a.length; i++){
        num += a[i]*(Math.pow(2, (a.length-1-i)));
    }

    return num;
}

//Function to convert a number to binary
function numToBinary(x){
    var ar = [];
    if(x==1){
        ar.push(1);
    }else{
        ar.push(x%2);
        x=x/2;
        return numToBinary(x);
    }

    ar.reverse();

    for(var a=0; a<ar.length; a++){
        console.log(ar[a]);
    }
}

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

    return numToBinary(ans);
}

// function clear(){
//     val1 = [];
//     val2 = [];
//     clicked = false;
//     resultBox.innerHTML = ' ';
// }


