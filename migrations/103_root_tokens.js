const P202Weth = artifacts.require('P202WETH')
const P202Token = artifacts.require('P202Token')
const TestToken = artifacts.require('TestToken')
const RootERC721 = artifacts.require('RootERC721')

module.exports = async function(deployer) {
  deployer.then(async() => {
    await deployer.deploy(P202Weth)
    await deployer.deploy(P202Token, 'Project 202 Token', 'P202')
    await deployer.deploy(TestToken, 'Test ERC20', 'TEST20')
    await deployer.deploy(RootERC721, 'Test ERC721', 'TST721')
  })
}
