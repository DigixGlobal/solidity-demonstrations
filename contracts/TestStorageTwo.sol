pragma solidity ^0.4.16;

contract TestStorageTwo {
  uint256[] numbers;

  function TestStorageTwo() {
    numbers.push(0);
    numbers.push(0);
    numbers.push(0);
  }

  function change_number(uint256 _position, uint256 _number, bool _to_throw, bool _to_return_false)
           public
           returns (bool _success)
  {
    numbers[_position] = _number;
    require(!_to_throw);
    _success = !_to_return_false;
  }

  function read_numbers()
           returns (uint256[] _numbers)
  {
    _numbers = numbers;
  }
}
