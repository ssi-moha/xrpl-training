const xrpl = require("xrpl");
async function main() {
  const client = new xrpl.Client("wss://white-side-star.xrp-testnet.quiknode.pro/3f1b0bf7770af224aad0f0e91648cad17b7d527a/");
  await client.connect();

  const response = await client.request({
    command: "account_info",
    account: "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe",
    ledger_index: "validated",
  });
  console.log(response);

  client.disconnect();
}
main();