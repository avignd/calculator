const Operator = require('./operator');

class DivOperator extends  Operator{
    constructor(){
        super();
        this.name = 'div';
    }

    compute(num1, num2){
        if(num2 !==0) {
            return num1 / num2;
        }
    }
}

module.exports = DivOperator;