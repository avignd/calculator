const Operator = require('./operator');

class MulOperator extends Operator{
    constructor(){
        super();
        this.name = 'mul';
    }

    compute(num1, num2){
        return num1 * num2;
    }
}

module.exports = MulOperator;