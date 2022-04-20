pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";

contract P202Token is ERC20Pausable, ERC20Detailed {
    constructor (string memory name, string memory symbol)
    public
    ERC20Detailed(name, symbol, 18) {
        _mint(msg.sender, 500_000_000 * (10**18));
    }
}