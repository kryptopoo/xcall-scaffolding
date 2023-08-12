const VotingDapp = artifacts.require("VotingDapp.sol");

module.exports = (deployer, network, accounts) => {
  const deployerAccount = accounts[0];

  console.log("> Deploying VotingDapp contract to network: " + network);
  console.log("> Deployer account: " + deployerAccount);
  deployer.deploy(VotingDapp);
  console.log("> VotingDapp contract deployed!\n");
};
