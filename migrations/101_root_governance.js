const Registry = artifacts.require('Registry')
const Governance = artifacts.require('Governance')
const GovernanceProxy = artifacts.require('GovernanceProxy')

module.exports = async function(deployer) {
  deployer.then(async() => {
    await deployer.deploy(Governance)
    await deployer.deploy(GovernanceProxy, Governance.address)
    await deployer.deploy(Registry, GovernanceProxy.address)
  })
}
