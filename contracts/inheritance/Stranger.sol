pragma solidity ^0.4.16;

contract Stranger {

  function strangerFunction(uint256 _number_1, uint256 _number_2, uint256 _number_3, uint256 _number_4)
           public
           returns (uint256 _sum)
  {
    _sum = _number_1 + _number_2 + _number_3 + _number_4;
  }

}
