const Registry = artifacts.require('Registry')
const RootChainProxy = artifacts.require('RootChainProxy')
const WithdrawManager = artifacts.require('WithdrawManager')
const WithdrawManagerProxy = artifacts.require('WithdrawManagerProxy')
const ExitNFT = artifacts.require('ExitNFT')

module.exports = async function(deployer, network, accounts) {
  deployer.then(async() => {
    await deployer.deploy(ExitNFT, Registry.address)
    await deployer.deploy(WithdrawManager)
    await deployer.deploy(
      WithdrawManagerProxy,
      WithdrawManager.address,
      Registry.address,
      RootChainProxy.address,
      ExitNFT.address
    )
  })
}
