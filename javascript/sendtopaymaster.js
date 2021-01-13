const Web3 = require("web3");
require("dotenv").config();
const web3 = new Web3(`https://kovan.infura.io/v3/${process.env.infurakey}`);
const myaccounts = require("web3-eth-accounts");

const account = new myaccounts(
  `https://kovan.infura.io/v3/${process.env.infurakey}`
);
let anaccount = account.privateKeyToAccount(
  "1b93ba511f803b7ddf2ca876e9a0e2a5027e19633dbc558aa1569e5cb0bc2e7f"
);

let ogaccount = {
  address: ["0x76df2fa76677e6e143bf05bdb7f324fe43d1e11d"],
  privateKey:
    "1b93ba511f803b7ddf2ca876e9a0e2a5027e19633dbc558aa1569e5cb0bc2e7f",
  publicKey:
    "4e19b40381174a8a64adabae9ddd7480dae4007abe06621f4bb420f27f3a1411f5072a9b6fe105a21be5a4428eb0f27cfc20f89f60d47c4befadfd65bda19eb0",
};
web3.eth.sendTransaction({
  from: anaccount.address,
  to: "0x964c26832AaA07279dE868846DC1bF4B9cDf5693",
  value: 1e18,
});
