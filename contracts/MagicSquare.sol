pragma solidity ^0.5.0;

import "./SquareLib.sol";

contract MagicSquare {
  using SquareLib for SquareLib.MagicSquare;

  SquareLib.MagicSquare storedSquare;
  string storedGreeting;

  function generateMagicSquare(uint n)
    public
  {
    require(n % 2 == 1);

    string memory greeting;
    SquareLib.MagicSquare memory square;
    uint256 x;
    uint256 y;
    uint256 i;

    greeting = "let us construct a magic square:";
    square = SquareLib.initialize(n);

    x = 0;
    y = n / 2;
    for (i = 1; i <= n * n; i++) {
      (x, y, i) = square.step(x, y, i);
    }

    save(square);
    storedGreeting = "finally, a decentralized magic square service!";
  }

  function get(uint i, uint j)
    public
    view
    returns (uint z)
  {
    require(i < storedSquare.n, "i must be less than size of square");
    require(j < storedSquare.n, "j must be less than size of square");

    z = storedSquare.rows[i][j];
  }

  function save(SquareLib.MagicSquare memory square)
    internal
  {
    uint256 x;
    uint256 y;

    storedSquare.n = square.n;
    storedSquare.rows.length = square.n;

    for (x = 0; x < square.n; x++) {
      storedSquare.rows[x].length = square.n;

      for (y = 0; y < square.n; y++) {
        storedSquare.rows[x][y] = square.rows[x][y];
      }
    }
  }
}
