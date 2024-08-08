require("@nomicfoundation/hardhat-toolbox"); //new update from hardhat requires to import 'hardhat-toolbox'
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    amoy: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 25000000000,
    },
  },
};