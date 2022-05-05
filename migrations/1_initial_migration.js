var Migrations = artifacts.require('./Migrations.sol')

module.exports = function(deployer, network, accounts) {
  //console.log(accounts);
  //throw new Error();
  deployer.deploy(Migrations)
}
