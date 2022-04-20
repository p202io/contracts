require('babel-register');
require('babel-polyfill');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const dotenv = require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const MNEMONIC =
  process.env.MNEMONIC ||
  'clock radar mass judge dismiss just intact mind resemble fringe diary casino';
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ALCHEMY_API_KEY = process.env.INFURA_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*', // match any network
      skipDryRun: true,
      gas: 7000000
    },
    bor: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `http://localhost:8545`
        ),
      network_id: '*', // match any network
      gasPrice: '0'
    },
    p202: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://https://rpc-mainnet.p202.io`
        ),
      network_id: '202',
      gasPrice: '90000000000'
    },
    'p202-testnet': {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://https://rpc-testnet.p202.io`
        ),
      network_id: '80202',
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://rpc-mainnet.matic.network`
        ),
      network_id: '137',
      gasPrice: '90000000000'
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://rpc-mumbai.matic.today`
        ),
      network_id: '80001',
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `wss://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
          //`https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
        ),
      network_id: '*', // 3
      gas: 8000000,
      gasPrice: 25000000000, // 25 gwei
      skipDryRun: true
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://goerli.infura.io/v3/${INFURA_API_KEY}`
        )
      },
      network_id: 5,
      gas: 8000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
        )
      },
      network_id: 1,
      gas: 3000000,
      gasPrice: '45000000000'
    },
    bsc: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://bsc-dataseed1.ninicoin.io/`
        )
      },
      network_id: 56,
      gas: 3000000,
      gasPrice: 5000000000,  // 5 gwei (in wei)
    },
  },
  compilers: {
    solc: {
      version: '0.5.17',
      docker: true,
      parser: 'solcjs',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: 'constantinople'
      }
    }
  },
  mocha: {
    bail: false,
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 21,
      outputFile: '/dev/null',
      showTimeSpent: true
    }
  },
  plugins: ['solidity-coverage', 'truffle-plugin-verify', 'truffle-contract-size'],
  verify: {
    preamble: 'Project 202 Network contracts'
  },
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
    bscscan: BSCSCAN_API_KEY,
  }
}
