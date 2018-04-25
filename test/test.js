const assert = require('assert');
const OperatorsHandler = require('../lib/operatorsHandler');

let operatorsHandler = new OperatorsHandler(null);

describe('Calculator', function() {
    describe('#add()', function() {
        it('2 + 3 should return 5', function() {
            let result = operatorsHandler.compute('add', 3, 2);
            assert.equal(result, 5);
        });
    });

    describe('#subtract()', function() {
        it('10 - 3 should return 7', function() {
            let result = operatorsHandler.compute('sub', 10, 3);
            assert.equal(result, 7);
        });
    });

    describe('#multiply()', function() {
        it('2 * 3 should return 6', function() {
            let result = operatorsHandler.compute('mul', 3, 2);
            assert.equal(result, 6);
        });
    });

    describe('#div()', function() {
        it('10 / 2 should return 5', function() {
            let result = operatorsHandler.compute('div', 10, 2);
            assert.equal(result, 5);
        });
    });

    describe('#divByZero()', function() {
        it('10 / 0 should return null', function() {
            let result = operatorsHandler.compute('div', 10, 0);
            assert.equal(result, null);
        });
    });

    describe('#nonExistentOperator', function() {
        it('non existent operator should return null', function() {
            let result = operatorsHandler.compute('mod', 10, 0);
            assert.equal(result, null);
        });
    });
});