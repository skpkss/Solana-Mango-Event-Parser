import { Connection, PublicKey } from '@solana/web3.js';

const rpcEndpoint = 'https://api.mainnet-beta.solana.com';
const mangoProgramId = new PublicKey('4MangoMjqJ2firMokCjjGgoK8d4MXcrgL7XJaL3w6fVg');

async function queryMangoTransactions() {
  try {
    const connection = new Connection(rpcEndpoint, 'confirmed');

    // Replace this with the actual program account you want to query
    const programAccount = mangoProgramId;

    // Fetch recent transactions for the specified program account
    const transactions = await connection.getSignaturesForAddress(programAccount);

    console.log('Mango Transactions:', transactions);
  } catch (error) {
    console.error('Error querying Mango transactions:', error);
  }
}

queryMangoTransactions();
