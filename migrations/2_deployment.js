const CurveBabyJubJubHelper = artifacts.require("./CurveBabyJubJubHelper.sol");


module.exports = function(deployer, network, accounts) {
  deployer.deploy(CurveBabyJubJubHelper);
};
