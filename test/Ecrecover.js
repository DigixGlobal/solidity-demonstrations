const a = require('awaiting');


const Verifier = artifacts.require("./Verifier.sol");

function toHex(str) {
	var hex = '';
	for(var i=0;i<str.length;i++) {
		hex += ''+str.charCodeAt(i).toString(16);
	}
	return hex;
}

const bN = web3.toBigNumber;

contract('TestInteractive', function(accounts) {


  it('ecrecover result matches addr', async function() {
    const addr = accounts[0];
    var instance = await Verifier.deployed()
    const msg = 'I really did make this message';
    const hex_msg = '0x' + toHex(msg);
    let signature = web3.eth.sign(addr, hex_msg);

    signature = signature.substr(2);

    const r = '0x' + signature.slice(0, 64)
    const s = '0x' + signature.slice(64, 128)
    const v = '0x' + signature.slice(128, 130)
    const v_decimal = web3.toDecimal(v) + 27

    const fixed_msg = `\x19Ethereum Signed Message:\n${msg.length}${msg}`;
    const fixed_msg_sha = web3.sha3(fixed_msg);

    const result = await instance.recoverAddr.call(fixed_msg_sha, v_decimal, r, s);
    const n = 30;
    // const tx = await instance.bulkRecover(Array(n).fill(fixed_msg_sha), Array(n).fill(bN(v_decimal)), Array(n).fill(r), Array(n).fill(s));
    // const tx = await instance.recoverAddr(fixed_msg_sha, v_decimal, r, s);
    const tx = await instance.bulkCalculations(bN(20000));
    console.log('tx: ', tx.receipt);
    console.log(`addr: ${addr}, result ${result}`);
    assert.equal(result, addr);
  })


});
