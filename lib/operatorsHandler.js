const AddOperator = require('./operators/addOperator');
const SubOperator = require('./operators/subOperator');
const MulOperator = require('./operators/mulOperator');
const DivOperator = require('./operators/divOperator');

class OperatorsHandler{
    constructor(operators){
        this.operators = [];
        this.operators.push(new AddOperator());
        this.operators.push(new SubOperator());
        this.operators.push(new MulOperator());
        this.operators.push(new DivOperator());

        if(operators && typeof(operators.isArray())){
            this.operators.push(...operators);
        }
    }

    compute(operatorName, number1, number2){
        let operator = this.operators.filter(o => o.name === operatorName);
        if(operator.length ===1){
            return operator[0].compute(number1, number2);
        }

        return null;
    }
}

module.exports = OperatorsHandler;