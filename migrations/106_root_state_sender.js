const StateSender = artifacts.require('StateSender')

module.exports = async function(deployer, network, accounts) {
  deployer.then(async() => {
    await deployer.deploy(StateSender)
  })
}
