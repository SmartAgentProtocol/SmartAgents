# SmartContractRank Algorithm

## Introduction: 
The SmartContractRank algorithm calculates the “Smart Score” of each Smart Contract based on the number of transactions it has conducted, multiplied by its “Dapps Score”, multiplied by its “DeFi Score”. The resulting list of Smart Contracts is ranked with the highest Smart Score first, and the lowest Smart Score last. The output is used by the Smart Agent based on the user’s prompt to present a list of recommended Smart Contracts that can be interacted with.

## Step #1 (Before User Interaction):
The cumulative number of transactions each Smart Contract has verified on its primary blockchain is used to generate a “Transaction Score” for all the ranked Smart Contracts.
- Contract A = Has 2 Transactions
- Contract B = Has 3 Transactions
- Contract C = Has 4 Transactions
- Contract D = Has 3 Transactions

## Step 2: (Before User Interaction)
The Transaction Score is multiplied by the "Dapps Score" of each Smart Contract. The Dapps Score is calculated by adding up how many of 10 values listed in the Smart Agent paper are implemented by the Blockchain the Smart Contract operates on.
- Contract A = 2 Transactions * Dapps Score of 10 = Score of 20
- Contract B = 3 Transactions * Dapps Score of 9 = Score of 27
- Contract C = 4 Transactions * Dapps Score of 3 = Score of 12
- Contract D = 5 Transactions * Dapps Score of 5 = Score of 25

## Step 3: (Before User Interaction)
The score from Step 2 is multiplied by the "DeFi Score" of each Smart Contract to generate a "Smart Score" For All Smart Contracts. The DeFi Score Is calculated by detailing how decentralized each smart contract’s operations are.
- Contract A = 20 * DeFi Score of 10 = Smart Score of 200
- Contract B = 27 * DeFi Score of 9 = Smart Score of 243
- Contract C = 12 * DeFi Score of 3 = Smart Score of 36
- Contract D = 25 * DeFi Score of 5 = Smart Score of 125

## Step 4: (Before User Interaction)
Specific Keywords / Tokens related to the Prompt's text generate a list via Web3 Agent LLM. Web3 Agent LLM is an enhancement dataset added to the Smart Agent Protocol, which was trained weekly on Web3 datasets of all smart contracts & blockchains.

## Step #5: (During User Interaction):
User enters a prompt. Result: 
Web3 Agent LLM determined Contracts A, B, C, & D are most related to the user Prompt.

## Step #6: (During User Interaction):
Web3 Agent LLM list is ranked by the Smart Scores = SmartContractRank Output:
- Rank #1 Smart Contact B = 243
- Rank #2 Smart Contract A = 200
- Rank #3 Smart Contract D = 125
- Rank #4 Smart Contract C = 36
- Real World SmartContractRank Calculations:

**Real World Inputs & Calculation:**
<img width="807" alt="SmartScoreForStablecoins" src="https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/56a46597-5e3c-4fa6-ab7b-71babbd7bdea">

**Real World Outputs:**
<img width="1035" alt="SmartScoreForStablecoins20230703" src="https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/65662c8e-d3e5-42be-a7e1-dc64b64cc474">

## Observations
When asked for Stablecoins, SmartContractRank listed first, “DAI” even though it has less transactions, its higher DeFi score pushed its Smart Score higher than USDT or USDC, which have more custodial risk. This seems a desirable outcome. The user's Smart Agent is presenting them with high usage & low risk options. This reduces the visibility of Smart Contracts that may be inflating their transaction count, but are centrally controlled / risky.

## Improving SmartContractRank & Web3 Agent LLM:
- The Graph protocol can be used to query data from both Layer 1’s and Smart Contracts. Regularly creating a graph of Smart Contracts would provide a broad set of data for training of the Web3 Agent LLM or use existing databases of Smart Contracts such as the Smart Contract Sanctuary. 

- Connecting Chain Link’s API for real time token pricing can add a layer of off chain data available to the Smart Agent that can be highly contextually valuable to the user.

- Funding via Smart Contracts that offer a referral fee / donation mechanism, then use those fees to cover the gas costs for the user seamlessly, and pay out the remainder as a donation to the Smart Agent community. This can drive more SmartContractRank dev work. 

- Use SmartContractRank.org website to provide devs a direct to API to call SmartContractRank for use in their applications. 

- User selection of the presented outputs and resulting Smart Agent transactions can add weight to the Smart Contract Smart Scores over time.
