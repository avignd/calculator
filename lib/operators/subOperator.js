const Operator = require('./operator');

class SubOperator extends Operator{
    constructor(){
        super();
        this.name = 'sub';
    }

    compute(num1, num2){
        return num1 - num2;
    }
}

module.exports = SubOperator;