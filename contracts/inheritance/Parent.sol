pragma solidity ^0.4.16;

contract Parent {
  uint256[] numbers;
  event TestEvent(uint256 _number);

  function Parent() {
  }

  function dummy(uint256 _number_1, uint256 _number_2)
           public
           returns (uint256 _sum)
  {
    _sum = _number_1 + _number_2;
  }

}
