function calculator(){
    const num1 = +prompt('Enter first number')
    const opt = prompt('Enter operator number')
    const num2 = +prompt('Enter second number')
    if( opt == '+' || opt == '*' || opt == '/' || opt == '-' ){
        
        switch (opt) {
            case '*':
            alert(`${num1}${opt}${num2} = ${num1*num2}`);
                break;
            case '+':
            alert(`${num1}${opt}${num2} = ${num1+num2}`);
                break;
            case '/':
            alert(`${num1}${opt}${num2} = ${num1/num2}`);
                break;
            case '-':
            alert(`${num1}${opt}${num2} = ${num1-num2}`);
                break;
        }
    }
    else{
        alert('operator is not valid');
    }
}

calculator()