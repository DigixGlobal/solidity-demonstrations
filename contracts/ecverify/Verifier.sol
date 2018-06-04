pragma solidity ^0.4.19;

/* import "./TestArray.sol"; */
import "./DaoStructs.sol";

contract Verifier {
    using DaoStructs for DaoStructs.Voting;

    address public dummy;
    uint8 last_nonce;
    uint256 quorum;
    uint256 yesvotes;
    mapping(address => bool) dummy_map;
    mapping(address => uint256) dummy_map_uint;
    function recoverAddr(bytes32 msgHash, uint8 v, bytes32 r, bytes32 s) public returns (address) {
        /* dummy = msg.sender; */
        dummy_map[dummy] = true;
        /* last_nonce += 1; */
        quorum += 123;
        yesvotes += 123;
        return ecrecover(msgHash, v, r, s);
        /* return address(0x0); */
    }

    function bulkRecover(bytes32[] msgHash, uint8[] v, bytes32[] r, bytes32[] s) public {
      uint256 length = msgHash.length;
      for (uint8 i=0;i<length;i++) {
        recoverAddr(msgHash[i], v[i], r[i], s[i]);
      }
    }

    function bulkCalculations(uint256 _length) public {
        uint256 sum = 0;
        address _add = address(this);
        for (uint256 i=0;i<_length;i++) {
            sum += dummy_map_uint[_add];
        }
        yesvotes = sum;
    }

    /* function testSendArray(address arrayContract) public
        returns (address _first_address)
    {
        address[] memory _array = TestArray(arrayContract).test();
        _first_address = _array[0];
    } */

    function Verifier () public {
        dummy_map_uint[address(this)] = 123456;
    }

    function isSigned(address _addr, bytes32 msgHash, uint8 v, bytes32 r, bytes32 s) public pure returns (bool) {
        return ecrecover(msgHash, v, r, s) == _addr;
    }
}
