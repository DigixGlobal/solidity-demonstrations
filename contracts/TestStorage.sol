pragma solidity ^0.4.16;

contract TestStorage {
  uint256[] numbers;
  event TestEvent(uint256 _number);

  function TestStorage() {
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
    TestEvent(_number);
    _success = !_to_return_false;
  }

  function read_numbers()
           returns (uint256[] _numbers)
  {
    _numbers = numbers;
  }

  function read_numbers(uint256 _no)
           returns (uint256[] _numbers)
  {
    _numbers = new uint256[](1);
    _numbers[0] = _no;
  }
}
