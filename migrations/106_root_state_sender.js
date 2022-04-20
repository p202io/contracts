const StateSender = artifacts.require('StateSender')

module.exports = async function(deployer) {
  deployer.then(async() => {
    await deployer.deploy(StateSender)
  })
}
