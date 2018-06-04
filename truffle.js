const LightWalletProvider = require('@digix/truffle-lightwallet-provider');

const { KEYSTORE, PASSWORD } = process.env;

module.exports = {
  networks: {
    kovan: {
      provider: new LightWalletProvider({
        keystore: KEYSTORE,
        password: PASSWORD,
        rpcUrl: 'https://kovan.infura.io/',
        pollingInterval: 2000,
        // debug: true,
      }),
      gas: 4700000,
      gasPrice: 20 * 10 ** 9,
      network_id: '42',
    },
    development: {
      host: "localhost",
      port: 6545,
      gas: 8000000,
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
