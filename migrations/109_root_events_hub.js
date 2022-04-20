const Registry = artifacts.require('Registry')
const EventsHub = artifacts.require('EventsHub')
const EventsHubProxy = artifacts.require('EventsHubProxy')

const ZeroAddress = '0x0000000000000000000000000000000000000000';


module.exports = async function(deployer, network, accounts) {
  deployer.then(async() => {
    {
      let eventsHubImpl = await deployer.deploy(EventsHub)
      let proxy = await deployer.deploy(EventsHubProxy, ZeroAddress)
      await proxy.updateAndCall(eventsHubImpl.address, eventsHubImpl.contract.methods.initialize(
        Registry.address
      ).encodeABI())
    }
  })
}
