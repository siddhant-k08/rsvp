require("@nomicfoundation/hardhat-toolbox"); //new update from hardhat requires to import 'hardhat-toolbox'
require("dotenv").config();

module.exports = {
  solidity: "0.8.25",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    amoy: {
      url: process.env.ALCHEMY_API_KEY,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 25000000000,
    },
  },
};