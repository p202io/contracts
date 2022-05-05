const MaticWeth = artifacts.require('Project202Eth')
const MaticToken = artifacts.require('P202')
const TestToken = artifacts.require('TestToken')
const RootERC721 = artifacts.require('RootERC721')

module.exports = async function(deployer, network, accounts) {
  deployer.then(async() => {
    await deployer.deploy(MaticWeth)
    await deployer.deploy(MaticToken)
    await deployer.deploy(TestToken, 'Test ERC20', 'TEST20')
    await deployer.deploy(RootERC721, 'Test ERC721', 'TST721')
  })
}
