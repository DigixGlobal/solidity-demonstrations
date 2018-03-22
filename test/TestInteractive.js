const a = require('awaiting');

var TestStorage = artifacts.require("./TestStorage.sol");
var TestStorageTwo = artifacts.require("./TestStorageTwo.sol");
var TestController = artifacts.require("./TestController.sol");
var TestInteractive = artifacts.require("./TestInteractive.sol");


const bN = web3.toBigNumber;

contract('TestInteractive', function(accounts) {
  let testStorage;
  let testStorageTwo;
  let testController;
  let testInteractive;

  beforeEach(async () => {
    testStorage = await TestStorage.new();
    testStorageTwo = await TestStorageTwo.new();
    testController = await TestController.new(testStorage.address, testStorageTwo.address);
    testInteractive = await TestInteractive.new(testController.address);
  });

  it("[normal case, interactive make 1 call to change first number] Set data correctly", async function() {
    const testNewNumber1 = bN(123);
    await testInteractive.change_first_number(testNewNumber1, false, false);
    const numbers = await testStorage.read_numbers.call();
    assert.deepEqual(numbers[0], testNewNumber1);
  });

  it("[normal case, interactive function makes 3 calls to change three numbers] Set data correctly", async function() {
    const testNumbers = [ bN(1234), bN(3456), bN(6789) ];
    await testInteractive.change_three_numbers(...testNumbers, false, false, false, false, false, false);
    const numbers = await testStorage.read_numbers.call();
    assert.deepEqual(numbers[0], testNumbers[0]);
    assert.deepEqual(numbers[1], testNumbers[1]);
    assert.deepEqual(numbers[2], testNumbers[2]);
  });

  it("[interactive function makes 3 calls, last call throws] revert all data", async function() {
    const testNumbers = [ bN(1234), bN(3456), bN(6789) ];
    assert.ok(await a.failure(testInteractive.change_three_numbers(...testNumbers, false, false, true, false, false, false)));
    const numbers = await testStorage.read_numbers.call();
    assert.deepEqual(numbers[0], bN(0));
    assert.deepEqual(numbers[1], bN(0));
    assert.deepEqual(numbers[2], bN(0));
  });

  it("[interactive function makes 3 calls, second call throws] revert all data", async function() {
    const testNumbers = [ bN(1234), bN(3456), bN(6789) ];
    assert.ok(await a.failure(testInteractive.change_three_numbers(...testNumbers, false, true, false, false, false, false)));
    const numbers = await testStorage.read_numbers.call();
    assert.deepEqual(numbers[0], bN(0));
    assert.deepEqual(numbers[1], bN(0));
    assert.deepEqual(numbers[2], bN(0));
  });

  it("[interactive function makes 3 calls, runs out of gas at the third call] revert all data", async function() {
    const testNumbers = [ bN(1234), bN(3456), bN(6789) ];
    assert.ok(await a.failure(testInteractive.change_three_numbers(...testNumbers, false, false, false, false, false, false, { gas: 80000 })));
    const numbers = await testStorage.read_numbers.call();
    assert.deepEqual(numbers[0], bN(0));
    assert.deepEqual(numbers[1], bN(0));
    assert.deepEqual(numbers[2], bN(0));
  });

  it("[interactive function makes 2 calls to change two storage contracts] set data correctly", async function() {
    const number1Contract1 = bN(9876);
    const number1Contract2 = bN(987654);
    await testInteractive.change_two_contracts(number1Contract1, number1Contract2, false, false, false, false);
    const numbersInContract1 = await testStorage.read_numbers.call();
    const numbersInContract2 = await testStorageTwo.read_numbers.call();
    assert.deepEqual(numbersInContract1[0], number1Contract1);
    assert.deepEqual(numbersInContract2[0], number1Contract2);
  });

  it("[interactive function makes 2 calls to change two storage contracts, second call throws] revert all data", async function() {
    const number1Contract1 = bN(9876);
    const number1Contract2 = bN(987654);
    assert.ok(await a.failure(testInteractive.change_two_contracts(number1Contract1, number1Contract2, false, true, false, false)));
    const numbersInContract1 = await testStorage.read_numbers.call();
    const numbersInContract2 = await testStorageTwo.read_numbers.call();
    assert.deepEqual(numbersInContract1[0], bN(0));
    assert.deepEqual(numbersInContract2[0], bN(0));
  });

  it("[interactive function makes 2 calls to change two storage contracts, second call throws] revert all data", async function() {
    console.log("1,", await )
    const number1Contract2 = bN(987654);
    assert.ok(await a.failure(testInteractive.change_two_contracts(number1Contract1, number1Contract2, false, true, false, false)));
    const numbersInContract1 = await testStorage.read_numbers.call();
    const numbersInContract2 = await testStorageTwo.read_numbers.call();
    assert.deepEqual(numbersInContract1[0], bN(0));
    assert.deepEqual(numbersInContract2[0], bN(0));
  });


});
