const MagicSquare = artifacts.require("MagicSquare");

contract("MagicSquare", (accounts) => {
  it("generates a magic square", async () => {
    const n = 3;
    const instance = await MagicSquare.deployed();

    await instance.generateMagicSquare(n);

    const square = [];

    for (let i = 0; i < n; i++) {
      const row = []
      for (let j = 0; j < n; j++) {
        const cell = await instance.get(i, j);
        row.push(cell.toNumber());
      }
      square.push(row);
    }

    const rowSums = square.map(
      (row) => row.reduce( (acc, val) => acc + val ),
      0
    );

    assert.equal(rowSums[0], rowSums[1]);
    assert.equal(rowSums[1], rowSums[2]);
    assert.equal(rowSums[2], rowSums[0]);
  });

  it.skip("errors with incorrect bounds", async () => {
    const expectedReason = "i must be less than size of square";

    // test setup
    const n = 3;
    const instance = await MagicSquare.deployed();
    await instance.generateMagicSquare(n);


    try {
      const cell = await instance.get(4, 2);
    } catch (e) {
      console.debug("error %o", e);
      assert.equal(e.reason, expectedReason);
    }



  })
});
