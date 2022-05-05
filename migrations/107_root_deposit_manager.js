const Registry = artifacts.require('Registry')
const GovernanceProxy = artifacts.require('GovernanceProxy')
const RootChainProxy = artifacts.require('RootChainProxy')
const DepositManager = artifacts.require('DepositManager')
const DepositManagerProxy = artifacts.require('DepositManagerProxy')

module.exports = async function(deployer, network, accounts) {
  deployer.then(async() => {
    await deployer.deploy(DepositManager)
    await deployer.deploy(
      DepositManagerProxy,
      DepositManager.address,
      Registry.address,
      RootChainProxy.address,
      GovernanceProxy.address
    )
  })
}
