// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";
import "@opengsn/gsn/contracts/interfaces/IKnowForwarderAddress.sol";

contract MyToken is ERC20,BaseRelayRecipient,IKnowForwarderAddress {
    constructor(uint256 initialSupply,address _forwarder) public ERC20("Mtoken", "MTOG") {
        _mint(_msgSender(), initialSupply);
        trustedForwarder =_forwarder;
    }
    function _msgSender() internal override(Context, BaseRelayRecipient)
    view returns (address payable) {
        return BaseRelayRecipient._msgSender();
    }

    function _msgData() internal override(Context,BaseRelayRecipient)
    view returns (bytes memory ret) {
        return BaseRelayRecipient._msgData();
    }

    string public override versionRecipient = "2.0.0";

    function getTrustedForwarder() public view override returns(address) {
    return trustedForwarder;
    }
}