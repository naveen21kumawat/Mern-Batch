function cal(val1,val2,op){
  let result;
    switch(op){
        case '+':

            return result = val1+val2
        case '-':
            return result =val1-val2
        case '*':
            return result = val1*val2
        case '/':
            return result = val1/val2
        default:
            return "Invalid Operation"
    }
}

let result = cal(2,3,'+')
alert(result)