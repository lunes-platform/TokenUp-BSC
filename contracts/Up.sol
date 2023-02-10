// contracts/FunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Up is ERC20 {
    constructor() ERC20("Up Coin", "UP") {
        _mint(msg.sender, 75000000 * (10**8));
    }
}
