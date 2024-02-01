import { Connection, PublicKey } from '@solana/web3.js';
import { EventParser, BorshCoder, web3 } from '@project-serum/anchor';
import { Program, Idl } from '@project-serum/anchor';
import BN from 'bn.js';
import mangoIdl from './mango_v4.json';

// Convert the imported IDL to an Idl object
const mangoIdlObject: Idl = JSON.parse(JSON.stringify(mangoIdl));

// Helper function to format BN values using the bn.js library
function formatBN(value: BN): string {
  return value.toString(10);
}

async function queryMangoTransactions() {
  try {
    const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
    const programAccount = new PublicKey('4MangoMjqJ2firMokCjjGgoK8d4MXcrgL7XJaL3w6fVg');
    const transactions = await connection.getSignaturesForAddress(programAccount);

    // Create an instance of the EventParser with the correct type
    const eventParser = new EventParser(programAccount, new BorshCoder(mangoIdlObject));

    for (const transaction of transactions) {
      const parsedBlock = await connection.getParsedBlock(transaction.slot, {
        maxSupportedTransactionVersion: 0,
      });
      const meta = parsedBlock.transactions.find(t => t.transaction.signatures[0] === transaction.signature)!.meta;
      const logs = meta && meta.logMessages;
      if (logs) {
        // Convert the generator to an array
        const eventsArray = Array.from(eventParser.parseLogs(logs));

        if (eventsArray.length > 0) {
          console.log('Transaction Signature:', transaction.signature);
          console.log('Block Time:', new Date(transaction.blockTime! * 1000).toLocaleString());

          for (const event of eventsArray) {
            console.log('Mango Event:', event.name);
    
            // Format BN values using the bn.js library
            const formattedData: Record<string, string | BN> = {};
            
            for (const [key, value] of Object.entries(event.data)) {
              formattedData[key] = typeof value === 'string' ? value : formatBN(value as BN);
            }
    
            console.log('Fields:', formattedData);
          }    
          console.log('-----------------------------');
        }
      }
    }
  } catch (error) {
    console.error('Error querying Mango transactions:', error);
  }
}

queryMangoTransactions();
