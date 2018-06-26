// const Blockchain = require('./blockchain');
// const Block = require('./blockchain/block');
// const bc = new Blockchain();

const Wallet = require('./wallet');
const wallet = new Wallet();
console.log(wallet.toString());

// for (var i = 0; i <10; i++) {
//   console.log(bc.addBlock(`foo ${i}`));
// }

// const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
// console.log(fooBlock.toString());

// const block = new Block('foo', 'bar', 'zoo', 'baz');
// console.log(block.toString());
// console.log(Block.genesis().toString());

