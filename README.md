# Project202 Network contracts
Ethereum smart contracts that power the [Project202 Network](https://p202.io).

### Install dependencies with
```
npm install
```

### Compile
bor-chain-id for Mainnet = 202
bor-chain-id for Testnet = 80202

```
npm run template:process -- --bor-chain-id <bor-chain-id>
npm run truffle:compile
```

```
npm run truffle:migrate:dev:ropsten --reset --to 112
```
