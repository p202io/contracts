// Deploy minimal number of contracts to link the libraries with the contracts
const utils = require('./utils')

const Registry = artifacts.require('Registry')
const GovernanceProxy = artifacts.require('GovernanceProxy')
const RootChain = artifacts.require('RootChain')
const RootChainProxy = artifacts.require('RootChainProxy')
const DepositManager = artifacts.require('DepositManager')
const DepositManagerProxy = artifacts.require('DepositManagerProxy')
const WithdrawManager = artifacts.require('WithdrawManager')
const WithdrawManagerProxy = artifacts.require('WithdrawManagerProxy')
const StateSender = artifacts.require('StateSender')
const StakeManager = artifacts.require('StakeManager')
const StakeManagerProxy = artifacts.require('StakeManagerProxy')
const SlashingManager = artifacts.require('SlashingManager')
const StakingInfo = artifacts.require('StakingInfo')
const ERC20Predicate = artifacts.require('ERC20Predicate')
const ERC721Predicate = artifacts.require('ERC721Predicate')
const MintableERC721Predicate = artifacts.require('MintableERC721Predicate')
const Marketplace = artifacts.require('Marketplace')
const MarketplacePredicate = artifacts.require('MarketplacePredicate')
const MarketplacePredicateTest = artifacts.require('MarketplacePredicateTest')
const TransferWithSigPredicate = artifacts.require('TransferWithSigPredicate')

const ExitNFT = artifacts.require('ExitNFT')
const MaticWeth = artifacts.require('Project202Eth')
const MaticToken = artifacts.require('P202')
const TestToken = artifacts.require('TestToken')
const RootERC721 = artifacts.require('RootERC721')

module.exports = async function(deployer, network, accounts) {
  deployer.then(async() => {
    await deployer.deploy(
      ERC20Predicate,
      WithdrawManagerProxy.address,
      DepositManagerProxy.address,
      Registry.address
    );
    await deployer.deploy(
      ERC721Predicate,
      WithdrawManagerProxy.address,
      DepositManagerProxy.address
    );
    await deployer.deploy(
      MintableERC721Predicate,
      WithdrawManagerProxy.address,
      DepositManagerProxy.address
    );
    await deployer.deploy(Marketplace);
    await deployer.deploy(MarketplacePredicateTest);
    await deployer.deploy(
      MarketplacePredicate,
      RootChain.address,
      WithdrawManagerProxy.address,
      Registry.address
    );
    await deployer.deploy(
      TransferWithSigPredicate,
      RootChain.address,
      WithdrawManagerProxy.address,
      Registry.address
    );

    const contractAddresses = {
      root: {
        Registry: Registry.address,
        RootChain: RootChain.address,
        GovernanceProxy: GovernanceProxy.address,
        RootChainProxy: RootChainProxy.address,
        DepositManager: DepositManager.address,
        DepositManagerProxy: DepositManagerProxy.address,
        WithdrawManager: WithdrawManager.address,
        WithdrawManagerProxy: WithdrawManagerProxy.address,
        StakeManager: StakeManager.address,
        StakeManagerProxy: StakeManagerProxy.address,
        SlashingManager: SlashingManager.address,
        StakingInfo: StakingInfo.address,
        ExitNFT: ExitNFT.address,
        StateSender: StateSender.address,
        predicates: {
          ERC20Predicate: ERC20Predicate.address,
          ERC721Predicate: ERC721Predicate.address,
          MarketplacePredicate: MarketplacePredicate.address,
          TransferWithSigPredicate: TransferWithSigPredicate.address
        },
        tokens: {
          MaticToken: MaticToken.address,
          MaticWeth: MaticWeth.address,
          TestToken: TestToken.address,
          RootERC721: RootERC721.address
        }
      }
    }

    utils.writeContractAddresses(contractAddresses)
  })
}
