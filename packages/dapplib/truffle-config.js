require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name rifle stereo million inflict knee oppose ghost'; 
let testAccounts = [
"0x1b18dc514dcf1a468e83072cad2c1c9461de3ed52d2797a0c17b9f243400adb1",
"0x862ccb44549dafa16fc02923ac2c6758c740cd0ae64c028835aee7db4e8d2d24",
"0x16b9ec8a77d76318c82cf1389b683a93672757707c93fb14ae75a010f3f20385",
"0x75a9f7d3e73918291d3ad6d68564f39949ccb870c041d2898814bca4ef53e523",
"0xa4b646160f5d40594c0ee4e0fcd0b10219160a505d081303ec727fdd01eb2184",
"0x53b231bc56f233fd24e733fae84f6e85fa7a275d7a129250f6a5a23984e7f39b",
"0x667e64debb86319bdf2ecb61792d8ed873dbeb6c144101e3a51e4c8713063b61",
"0xcdeb4700b938243cad6ea6dda71e0ca4e3a1a9d587ef658cf42342fd8da536ce",
"0x8437799448f8c4a5bd28e097b418d61dad5818b0e2cb35339c42e1c521bcc7e9",
"0x6e602b521b1b60b41237b3f3baad76a515cb966db4ff930a560a512d9a7f14e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

