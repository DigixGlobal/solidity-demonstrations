module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 6545,
      network_id: "*" // Match any network id
    }
  },
  // mocha: {
  //   reporter: 'eth-gas-reporter',
  //   reporterOptions : {
  //     currency: 'USD',
  //     gasPrice: 21
  //   }
  // }
};
