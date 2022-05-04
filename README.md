# Project202 contracts

Ethereum smart contracts that power the [Project202](https://p202.io).

### Install dependencies with

```
npm install
```

### Compile

bor-chain-id for Mainnet = 202
bor-chain-id for TestnetV4 (Mumbai) = 80202

```
npm run template:process -- --bor-chain-id <bor-chain-id>
npm run truffle:compile
```

### Start main chain and side chain

- Start Main chain

```
npm run testrpc
```

- Start Project202 side chain. Requires docker.

```
npm run bor:simulate
```

- If you ran a bor instance before, a dead docker container might still be lying around, clean it with

```
npm run bor:clean
```

- Run a bor (our Project202 side chain node) instance.

### Deploy Contracts

- For local development

```
npm run truffle:migrate
```

- For a properly initialized set of contracts, follow the instructions [here](./deploy-migrations/README.md).

### Run tests

```
npm test
```
