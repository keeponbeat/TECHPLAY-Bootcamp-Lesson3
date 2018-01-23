const add = require('./adder.js');

class TestSuite {

  runTest(testName){
    const result = this[testName]();
    console.log(result, testName);
  }

  runTests() {
   Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    .filter(propName => typeof this[propName] === 'function' )
    .filter(propName => /^test/.test(propName))
    .forEach(testFuncName => { this.runTest(testFuncName) });
  }

  assertEquals(a, b) {
    return a === b;
  }

  testAddPositiveNumber() {
    return this.assertEquals(add(7, 3), 10);
  }

  testAddNegativeNumber() {
    return this.assertEquals(add(-7, -3), -10);
  }

  testAddPositiveAndNegativeNumber() {
    return this.assertEquals(add(-7, 3), -4);
  }
}

const suite = new TestSuite();
suite.runTests();
