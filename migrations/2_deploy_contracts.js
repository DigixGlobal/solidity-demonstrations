var TestInteractive = artifacts.require("./TestInteractive.sol");
var TestController = artifacts.require("./TestController.sol");
var TestStorage = artifacts.require("./TestStorage.sol");
var TestStorageTwo = artifacts.require("./TestStorageTwo.sol");
var Parent = artifacts.require("./Parent.sol");
var Child = artifacts.require("./Child.sol");
var Stranger = artifacts.require("./Stranger.sol");
var Verifier = artifacts.require("./Verifier.sol");

module.exports = function(deployer) {
  deployer.deploy(Verifier);
  // deployer.deploy(TestStorage).then(() => {
  //   deployer.deploy(Parent);
  //   return deployer.deploy(TestStorageTwo);
  // })
  // .then(() => {
  //   deployer.deploy(Child);
  //   return deployer.deploy(TestController, TestStorage.address, TestStorageTwo.address);
  // })
  // .then(() => {
  //   // deployer.deploy(Stranger);
  //   deployer.deploy(Verifier);
  //   return deployer.deploy(TestInteractive, TestController.address);
  // });
};
