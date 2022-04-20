const Registry = artifacts.require('Registry')
const StakingInfo = artifacts.require('StakingInfo')
const StakingNFT = artifacts.require('StakingNFT')

module.exports = async function(deployer) {
  deployer.then(async() => {
    await deployer.deploy(StakingInfo, Registry.address)
    await deployer.deploy(StakingNFT, 'Project 202 Validator', 'P202V')
  })
}
