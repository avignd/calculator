const Operator = require('./operator');

class AddOperator extends  Operator{
    constructor(){
        super();
        this.name = 'add';
    }

    compute(num1, num2){
        return num1 + num2;
    }
}

module.exports = AddOperator;