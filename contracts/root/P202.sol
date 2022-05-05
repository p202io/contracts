pragma solidity ^0.5.2;

import {TestToken} from "../common/tokens/TestToken.sol";


contract P202 is TestToken {
    constructor() TestToken("Project202", "P202") public {
    }
}