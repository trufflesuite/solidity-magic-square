module.exports = {
   compilers: {
    solc: {
      version: "^0.5.7"
    }
  },
   networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        }
   }
};
