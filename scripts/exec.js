const MagicSquare = artifacts.require("./MagicSquare.sol");

module.exports = async function(callback) {
  const accounts = await web3.eth.getAccounts();

  const instance = await MagicSquare.deployed();

  //await instance.generateMagicSquare(3, {from: accounts[0]});
  await instance.emitEvent({from: accounts[0]});

  callback();
}