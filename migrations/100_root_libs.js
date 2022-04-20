const bluebird = require('bluebird')

const SafeMath = artifacts.require('openzeppelin-solidity/contracts/math/SafeMath.sol')

const RLPReader = artifacts.require('solidity-rlp/contracts/RLPReader.sol')

const BytesLib = artifacts.require('BytesLib')
const Common = artifacts.require('Common')
const ECVerify = artifacts.require('ECVerify')
const Merkle = artifacts.require('Merkle')
const MerklePatriciaProof = artifacts.require('MerklePatriciaProof')
const PriorityQueue = artifacts.require('PriorityQueue')
const RLPEncode = artifacts.require('RLPEncode')

const RootChain = artifacts.require('RootChain')
const WithdrawManager = artifacts.require('WithdrawManager')
const StateSender = artifacts.require('StateSender')
const StakeManager = artifacts.require('StakeManager')
const SlashingManager = artifacts.require('SlashingManager')
const StakingInfo = artifacts.require('StakingInfo')
const ERC20Predicate = artifacts.require('ERC20Predicate')
const ERC721Predicate = artifacts.require('ERC721Predicate')
const MintableERC721Predicate = artifacts.require('MintableERC721Predicate')
const MarketplacePredicate = artifacts.require('MarketplacePredicate')
const MarketplacePredicateTest = artifacts.require('MarketplacePredicateTest')
const TransferWithSigPredicate = artifacts.require('TransferWithSigPredicate')
const TransferWithSigUtils = artifacts.require('TransferWithSigUtils')

const StakeManagerTestable = artifacts.require('StakeManagerTestable')
const StakeManagerTest = artifacts.require('StakeManagerTest')

const StakeManagerExtension = artifacts.require('StakeManagerExtension')

const libDeps = [
  {
    lib: BytesLib,
    contracts: [WithdrawManager, ERC20Predicate, ERC721Predicate, MintableERC721Predicate]
  },
  {
    lib: Common,
    contracts: [
      WithdrawManager,
      ERC20Predicate,
      ERC721Predicate,
      MintableERC721Predicate,
      MarketplacePredicate,
      MarketplacePredicateTest,
      TransferWithSigPredicate
    ]
  },
  {
    lib: ECVerify,
    contracts: [
      StakeManager,
      SlashingManager,
      StakeManagerTestable,
      MarketplacePredicate,
      MarketplacePredicateTest,
      TransferWithSigPredicate
    ]
  },
  {
    lib: Merkle,
    contracts: [
      WithdrawManager,
      ERC20Predicate,
      ERC721Predicate,
      MintableERC721Predicate,
      StakeManager,
      StakeManagerTestable,
      StakeManagerTest
    ]
  },
  {
    lib: MerklePatriciaProof,
    contracts: [WithdrawManager, ERC20Predicate, ERC721Predicate, MintableERC721Predicate]
  },
  {
    lib: PriorityQueue,
    contracts: [WithdrawManager]
  },
  {
    lib: RLPEncode,
    contracts: [
      WithdrawManager,
      ERC20Predicate,
      ERC721Predicate,
      MintableERC721Predicate,
      MarketplacePredicate,
      MarketplacePredicateTest
    ]
  },
  {
    lib: RLPReader,
    contracts: [
      RootChain,
      StakeManager,
      ERC20Predicate,
      ERC721Predicate,
      MintableERC721Predicate,
      MarketplacePredicate,
      MarketplacePredicateTest
    ]
  },
  {
    lib: SafeMath,
    contracts: [
      RootChain,
      ERC20Predicate,
      ERC721Predicate,
      MintableERC721Predicate,
      MarketplacePredicate,
      MarketplacePredicateTest,
      TransferWithSigPredicate,
      StakeManager,
      SlashingManager,
      StakingInfo,
      StateSender,
      StakeManagerExtension
    ]
  },
  {
    lib: SafeMath,
    contracts: [RootChain, ERC20Predicate]
  },
  {
    lib: TransferWithSigUtils,
    contracts: [
      TransferWithSigPredicate,
      MarketplacePredicate,
      MarketplacePredicateTest
    ]
  }
];

module.exports = async function(deployer) {
  deployer.then(async() => {
    await bluebird.map(libDeps, async e => {
      await deployer.deploy(e.lib)
      deployer.link(e.lib, e.contracts)
    }, { concurrency: 1, });
  })
}
