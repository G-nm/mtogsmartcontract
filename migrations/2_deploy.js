const BN = require("bignumber.js");
let amount = BN("1e28");
console.log(amount);

const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(
    MyToken,
    amount,
    "0x0842Ad6B8cb64364761C7c170D0002CC56b1c498"
    // kovan trusted forwarder
  );
};

//Mypaymaster address :0xCB336dF932d528664ADd7e6d86B9238aB1E33C4C
//in small 0xcb336df932d528664add7e6d86b9238ab1e33c4c
