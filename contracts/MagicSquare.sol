pragma solidity ^0.4.23;

import "./SquareLib.sol";

contract MagicSquare {
  uint a;

  event TestEvent(uint b);
  event TestEvent2(uint b, uint c);

  function emitEvent() public {
    emit TestEvent(13);
    emit TestEvent2(13, 37);
    bytes32 data = hex"1337";
    bytes32 topic = "hello";
    log1(data, topic);
    log3(
      bytes32(123),
      bytes32(0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20),
      bytes32(uint256(msg.sender)),
      bytes32(69)
    );
  }
}
