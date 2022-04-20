const ValidatorShareFactory = artifacts.require('ValidatorShareFactory')
const ValidatorShare = artifacts.require('ValidatorShare')

module.exports = async function(deployer) {
  deployer.then(async() => {
    await deployer.deploy(ValidatorShareFactory)
    await deployer.deploy(ValidatorShare)
  });
}
