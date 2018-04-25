const express = require('express');
const router = express.Router();
const OperatorsHandler = require('../lib/operatorsHandler');

let operatorHandler = new OperatorsHandler(null);

router.get('/', function(req, res, next) {
    if(!req.query.operator  && !req.query.number1 && !req.query.number2 ){
        res.status = 400;
        return res.send('validation error');
    }

    let num1 = parseInt(req.query.number1);
    let num2 = parseInt(req.query.number2);

    if(!num1 || !num2){
        res.status = 400;
        return res.send('parse error');
    }

    let result = operatorHandler.compute(req.query.operator, num1, num2);
    if(result !== null){
        return res.send({result : result});
    }

    res.status = 400;
    return res.send('general error');
});

module.exports = router;
