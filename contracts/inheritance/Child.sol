pragma solidity ^0.4.16;

import "./Stranger.sol";
import "./Parent.sol";

contract Child is Parent {

  function childFunction(uint256 _number_1, uint256 _number_2, uint256 _number_3, address _stranger)
           public
           returns (uint256 _sum)
  {
    _sum = Stranger(_stranger).strangerFunction(_number_1, _number_2, _number_3, 4);
  }

}
