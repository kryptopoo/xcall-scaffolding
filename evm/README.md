# EVM Integration

The solidity source code for the contracts can be found in the `./contracts/` folder.

## Design Documents

Read the design documents for each example project:

1. [Cross Chain Voting dApp](../docs/cross-chain-voting-dapp.md)

## Prerequisites

Install NPM dependencies.

```bash
npm install
```

## Build

Run the following command to compile the contracts.

```bash
npm run compile
```

## Test

Run the following command to run the tests.

```bash
npm run test
```


## Deploy

Run the following command to run the deployment.

```bash
truffle migrate --network sepolia
```

Verify

```bash
truffle run verify VotingDapp@0x4d567d5FD4eE927d3a29CBE2711986fe1aE8639E --network sepolia
```