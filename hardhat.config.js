require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/FggdvGmhGJl4znjg04dvMCcPPe39ZvEA",
      accounts: [
        "bd600deae57309b60cf480f363542e3f24320e954e7bbd4893c72b85f4612efd",
      ],
    },
  },
};
