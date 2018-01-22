var TestInteractive = artifacts.require("./TestInteractive.sol");
var TestController = artifacts.require("./TestController.sol");
var TestStorage = artifacts.require("./TestStorage.sol");
var TestStorageTwo = artifacts.require("./TestStorageTwo.sol");

module.exports = function(deployer) {
  deployer.deploy(TestStorage).then(() => {
    return deployer.deploy(TestStorageTwo);
  })
  .then(() => {
    return deployer.deploy(TestController, TestStorage.address, TestStorageTwo.address);
  })
  .then(() => {
    return deployer.deploy(TestInteractive, TestController.address);
  });
};
