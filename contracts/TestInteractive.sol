pragma solidity ^0.4.16;

import "./TestController.sol";

contract TestInteractive {

  address testController;

  function TestInteractive(address _testController) {
    testController = _testController;
  }

  function change_first_number (uint256 _number, bool _to_throw, bool _to_return_false) {
    TestController(testController).change_storage(0, _number, _to_throw, _to_return_false);
  }

  function change_three_numbers (uint256 _number_1, uint256 _number_2, uint256 _number_3, bool _to_throw_1, bool _to_throw_2, bool _to_throw_3, bool _to_return_false_1, bool _to_return_false_2, bool _to_return_false_3) {
    TestController(testController).change_storage(0, _number_1, _to_throw_1, _to_return_false_1);
    TestController(testController).change_storage(1, _number_2, _to_throw_2, _to_return_false_2);
    TestController(testController).change_storage(2, _number_3, _to_throw_3, _to_return_false_3);
  }

  function change_two_contracts (uint256 _number_1_contract_1, uint256 _number_1_contract_2, bool _to_throw_1, bool _to_throw_2, bool _to_return_false_1, bool _to_return_false_2) {
    TestController(testController).change_storage(0, _number_1_contract_1, _to_throw_1, _to_return_false_1);
    TestController(testController).change_storage_two(0, _number_1_contract_2, _to_throw_2, _to_return_false_2);
  }
}
