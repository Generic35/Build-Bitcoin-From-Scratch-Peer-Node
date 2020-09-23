class TransactionMiner {
  constructor({ blockchain, transactionPool, wallet, pubsub }) {
    this.blockchain = blockchain;
    this.transactionPool = transactionPool;
    this.wallet = wallet;
    this.pubsub = pubsub;
  }

  mineTransactions() {
    // get the transsaction pool's valid transaction
    // generate the miners reward
    // add a block consisting of these transactions to the blockchain
    // broadcast the update blockchain
    // clear the transaction pool
  }
}

module.exports = TransactionMiner;
