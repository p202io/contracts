const Registry = artifacts.require('Registry')
const RootChain = artifacts.require('RootChain')
const RootChainProxy = artifacts.require('RootChainProxy')

module.exports = async function(deployer, network, accounts) {
  if (!process.env.HEIMDALL_ID) {
    console.log('HEIMDALL_ID is not set; defaulting to heimdall-P5rXwg')
    process.env.HEIMDALL_ID = 'heimdall-P5rXwg'
  }

  deployer.then(async() => {
    await deployer.deploy(RootChain)
    await deployer.deploy(RootChainProxy, RootChain.address, Registry.address, process.env.HEIMDALL_ID)
  })
}
