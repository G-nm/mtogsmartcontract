### HOW TO DO THIS

1. Start ganache with a mnemonic and add i tag with 1337 and chainId with 1337
2. Run npx gsn start
3. Do a truffle compile and truffle migrate to the development environment
4. Do a truffle console and create a new instance of your paymaster and setTarget,setRelayHub,setTrustedForwarder and send funds to the forwarder check balance using paymaster.getRelayHubDeposit()
5. Do a paymaster.address and save that address somewhere add that address to your gsn configuration

what to do next deploy contract and paymaster to a testnet
get metamask mnemonic and use hdwallet and infura link to deploy get forwarder address from testnet options in opengsn

mtogaddress:0xC53Ce524d443011DD3Bf11C3F3a9CafF35E1E63b - Rinkeby
paymasteraddress:0x55440b5df49de101072f8969D7B8cBFbF17AE186 - Rinkeby
forwarder:0x956868751Cc565507B3B58E53a6f9f41B56bed74 - Rinkeby

paymaster:0x964c26832AaA07279dE868846DC1bF4B9cDf5693 Kovan
mtogaddress:0xDef610530605f2d0e16cb9b78Ca4e13E15a8CB37- Kovan
forwarder:0x0842Ad6B8cb64364761C7c170D0002CC56b1c498 - Kovan\
relayhub: 0xE9dcD2CccEcD77a92BA48933cb626e04214Edb92 - Kovan
