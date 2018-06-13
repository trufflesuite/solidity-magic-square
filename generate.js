var MagicSquare = artifacts.require("./MagicSquare");

module.exports = function(callback) {
  MagicSquare.deployed().then(function (instance) {
    if (process.argv.length < 5) {
      throw new Error("Must specify value");
    }

    var n = parseInt(process.argv[4]);

    instance.generateMagicSquare(n).then(function (result) {
      console.log(result.tx);
    });

    callback();
  }).catch(function (err) {
    callback(err);
  });
}
