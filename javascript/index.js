require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3(`https://rinkeby.infura.io/v3/${process.env.infurakey}`);
const BN = require("bignumber.js");
const GSN = require("@opengsn/gsn");
const accountcreator = require("./accountcreation");

let forwarder = "0x956868751Cc565507B3B58E53a6f9f41B56bed74";

let paymaster = "0x55440b5df49de101072f8969D7B8cBFbF17AE186";

let mytokencontract = require("../build/contracts/MyToken.json");
const {
  resolveConfigurationGSN,
} = require("@opengsn/gsn/dist/src/relayclient/GSNConfigurator");
let mytokencontractabi = mytokencontract.abi;
let mytokencontractaddress = mytokencontract.networks[4].address;

let mytokencontractinstance = new web3.eth.Contract(
  mytokencontractabi,
  mytokencontractaddress
);

async function getAccounts() {
  let accounts = await web3.eth.getAccounts();
  //   console.log(accounts);
  return accounts;
}

// getAccounts();

async function contractinfo(senderindex, receiverindex) {
  const config = await resolveConfigurationGSN(web3.currentProvider, {
    paymasterAddress: paymaster,
    forwarderAddress: forwarder,
  });
  let provider = new GSN.RelayProvider(web3.currentProvider, config);

  let sender = accountcreator.accountdetails(senderindex);
  let receiver = accountcreator.accountdetails(receiverindex);
  let senderaddress = (await sender).address[0];
  let receiveraddress = (await receiver).address[0];
  let receiverprivateKey = (await receiver).privateKey;
  let senderprivateKey = (await sender).privateKey;
  let senderBufferprivateKey = Buffer.from(senderprivateKey, "hex");
  let receiverBufferprivateKey = Buffer.from(receiverprivateKey, "hex");
  let senderaccounttoaddtoprovider = {
    address: senderaddress,
    privateKey: senderBufferprivateKey,
  };
  let receiveraccounttoaddtoprovider = {
    address: receiveraddress,
    privateKey: receiverBufferprivateKey,
  };
  provider.addAccount(senderaccounttoaddtoprovider);
  provider.addAccount(receiveraccounttoaddtoprovider);

  web3.setProvider(provider);
  let transferamount = BN("1e18");
  let balance = await mytokencontractinstance.methods
    .transfer(receiveraddress, transferamount)
    .send({ from: senderaddress, gas: 1e6 });
  console.log(balance.toString());
  /* let account = await getAccounts();
  let originalaccount = account[2];
  let receiveracount = account[3];
  
  
  

 */

  //   let balance = await mytokencontractinstance.methods
  //     .balanceOf(receiveraddress)
  //     .call();
  //   console.log(balance);
}
contractinfo(0, 2);

async function getBalanceinweb3() {
  //   let account = await getAccounts();
  //   let accounttocheckbalance = account[2];
  let account = accountcreator.accountdetails(12);
  let address = (await account).address[0];
  let balance = await web3.eth.getBalance(address);
  console.log(balance);
}
// getBalanceinweb3();

async function sendethertopaymaster() {
  //   let unlocked = await web3.eth.accounts.privateKeyToAccount(
  //     "0x" + "1b93ba511f803b7ddf2ca876e9a0e2a5027e19633dbc558aa1569e5cb0bc2e7f"
  //   );
  //   let accounts = await web3.eth.getAccounts();
  //   //   let sender = accounts[0];
  //   let unlocking = await web3.eth.personal.unlockAccount(
  //     "0x76Df2Fa76677E6e143bF05Bdb7F324Fe43D1E11d",
  //     "test123",
  //     1000
  //   );
  console.log(accounts, unlocked, unlocking);
  //   await web3.eth
  //     .sendTransaction({
  //       from: sender,
  //       to: paymaster,
  //       value: BN(1e18),
  //       gas: 1e6,
  //     })
  //     .on("error", (error) => {
  //       console.log(error);
  //     })
  //     .on("receipt", (receipt) => {
  //       console.log(receipt);
  //     });
}
// sendethertopaymaster();
