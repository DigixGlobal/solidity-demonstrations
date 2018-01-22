pragma solidity ^0.4.16;

/// @title Truffle Migrations Contract
/// @author Consensys / Tim Coulter

contract Migrations {

  /// @notice The owner of this Contract
  /// @dev Set to `msg.sender` on creation
  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owner) _;
  }
  function Migrations() {
    owner = msg.sender;
  }

  /// @notice Set the latest completed migraiton step for project
  /// @param completed Completed step
  function setCompleted(uint completed) restricted {
    last_completed_migration = completed;
  }

  /// @notice Upgrades to a new Migrations contract
  /// @param new_address Address of the new owner
  function upgrade(address new_address) restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
