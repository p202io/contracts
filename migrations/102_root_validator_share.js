const ValidatorShareFactory = artifacts.require('ValidatorShareFactory')
const ValidatorShare = artifacts.require('ValidatorShare')

module.exports = async function(deployer, network, accounts) {
  deployer.then(async() => {
    await deployer.deploy(ValidatorShareFactory)
    await deployer.deploy(ValidatorShare)
  })
}
