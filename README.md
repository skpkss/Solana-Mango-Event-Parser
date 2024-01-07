# Solana Mango Event Parser
## Commands for executing:- 
1. node --version
2. npm --version
3. npm install -g typescript
4. tsc --version
5. npm install -g ts-node
6. npm init --y
7. tsc --init
8. npm install @types/node
9. npx ts-node solanaConnection.ts           (Connecting to Solana Mainnet Beta)
10. npx ts-node queryTransactions.ts         (Querying transactions from Mango’s program account)
11. npm install --save bn.js                 (to format BN)
12. npx ts-node parseMangoEvent.ts           (logging the parsed data along with the transaction signature & block time)


 ##   Sample output of solana mainnet connection:-
    Connection to Solana Mainnet Beta successful!
Epoch Info: {
  absoluteSlot: 239833260,
  blockHeight: 220887970,
  epoch: 555,
  slotIndex: 73260,
  slotsInEpoch: 432000,
  transactionCount: 259047258051
}

## Sample Output of query transactions:-
Mango Transactions: [
  {
    blockTime: 1704602007,
    confirmationStatus: 'confirmed',
    err: null,
    memo: null,
    signature: '5UGUot82kEeXuyUv3CxPSQ589LU3LsyTKH4pdBGzy8K19YUC2a2QkveNwmy9HewxiCPqc65iK8CT6XiSPoVwLJwB',
    slot: 240332209
  }

  ## Sample output of  parsed mango events:-
  Transaction Signature: 5YCdfD1hmDfR8W9tHQQF4Vgdd2BQ4ymBbGFkHQv3dNR8wDMz3WopcZbCSyt2MsMSG7R7p8XXqf3DfrG86YNJstGz
Block Time: 7/1/2024, 9:44:05 am
Mango Event: PerpUpdateFundingLogV2
Fields: {
  mangoGroup: '78b8f4cGCwmZ9ysPFMWLaLTkkaYnUjwMJYStWe5RTSSX',
  marketIndex: '2',
  longFunding: '30691546046936565454',
  shortFunding: '30691546046936565454',
  price: '26393716095200',
  oracleSlot: '240329706',
  oracleConfidence: '22058576460',
  oracleType: '[object Object]',
  stablePrice: '26394348048625',
  feesAccrued: '1142913626773791826243243',
  feesSettled: '3444165113644826174837077',
  openInterest: '1019088',
  instantaneousFundingRate: '632426666489'
}
-----------------------------

## Features

- Queries Solana transactions for Mango events
- Decodes and logs Mango events along with transaction details
- Uses the @project-serum/anchor library for interaction with Solana programs
- Utilizes the bn.js library for formatting BigNum values

  ## Challenges Faced

- Integration with Solana blockchain and decoding events required understanding the Solana Web3.js library and the anchor framework, which are relatively new technologies.
- Parsing and formatting BigNum values using the bn.js library for display posed challenges due to the limited documentation available for these emerging tools.
- The novelty of Solana as a blockchain platform meant there was a scarcity of information and resources on the internet, making problem-solving and learning a more exploratory process.
- As a newcomer to the Solana and Mango ecosystems, there was a learning curve in grasping the intricacies of these technologies.

  ## Learnings

- Acquired in-depth knowledge of the Solana blockchain and its Web3.js library.
- Gained proficiency in using the Anchor framework for Solana smart contract development.
- Developed skills in decoding and parsing transactions using the Mango IDL (Interface Definition Language).
- Explored the Mango ecosystem and its components, including understanding the structure of Mango events and their associated data.
- Learned to interact with the Solana blockchain and Mango program to extract and interpret relevant information.
- Enhanced familiarity with the bn.js library for handling BigNum values in the Solana context.

## Mango

Mango is a decentralized finance (DeFi) protocol built on the Solana blockchain. It aims to provide a comprehensive suite of financial services, including decentralized trading, lending, and borrowing. Mango leverages the Solana blockchain's high-speed and low-cost transactions to create an efficient and scalable decentralized financial ecosystem.

Key Features:
- Decentralized Perpetual Swaps: Trade perpetual swaps on various assets in a trustless and secure manner.
- Margin Trading: Utilize leverage to amplify trading positions and potential returns.
- Lending and Borrowing: Participate in decentralized lending and borrowing markets to earn interest or access liquidity.
- Governance: Empower users to participate in the protocol's governance, shaping the future development of the Mango ecosystem.

Mango introduces innovative financial instruments and features to enhance the decentralized trading experience while leveraging the speed and cost-effectiveness of the Solana blockchain.




    
