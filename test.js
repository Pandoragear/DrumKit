function add (num1, num2) {
    return num1 + num2;
}

function muiltiply (num1, num2){
    return num1 * num2;
}

function calculator (num1, num2, operator){
    return operator(num1,num2);
}

debugger;
calculator(3,4, muiltiply)