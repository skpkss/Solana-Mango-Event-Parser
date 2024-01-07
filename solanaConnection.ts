import { Connection } from '@solana/web3.js';

const rpcEndpoint = 'https://api.mainnet-beta.solana.com';

// Initializing a connection to the Solana Mainnet Beta
const connection = new Connection(rpcEndpoint, 'confirmed');

// Check if the connection is successful
connection.getEpochInfo().then((epochInfo) => {
  console.log('Connection to Solana Mainnet Beta successful!');
  console.log('Epoch Info:', epochInfo);
}).catch((error) => {
  console.error('Error connecting to Solana Mainnet Beta:', error);
});
