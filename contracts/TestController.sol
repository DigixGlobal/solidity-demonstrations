pragma solidity ^0.4.16;

import "./TestStorage.sol";
import "./TestStorageTwo.sol";

contract TestController {

  address testStorage;
  address testStorageTwo;

  function TestController(address _testStorage, address _testStorageTwo) {
    testStorage = _testStorage;
    testStorageTwo = _testStorageTwo;
  }

  function change_storage (uint256 _position, uint256 _number, bool _to_throw, bool _to_return_false) {
    TestStorage(testStorage).change_number(_position, _number, _to_throw, _to_return_false);
  }

  function change_storage_two (uint256 _position, uint256 _number, bool _to_throw, bool _to_return_false) {
    TestStorageTwo(testStorageTwo).change_number(_position, _number, _to_throw, _to_return_false);
  }
}
