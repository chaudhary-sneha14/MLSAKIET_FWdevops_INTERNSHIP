let display= document.getElementById('display');

function clear(){
display.value="";
}

function DelChar(){
display.value=display.value.slice(0,-1);
}
function appendNumber(number){
 display.value+=number;
}

function Calculate(){
    display.value=eval(display.value);
}

function appendOperator(operator){
    display.value+=operator; 
}