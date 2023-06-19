# Prompt Rank Algorithm

## Definition: 
The Prompt Rank algorithm creates a graph of the relationships between prompts from users & Smart Contracts. The output is a ranked list of Smart Contracts that a Smart Agent can interact with based on the user’s choice. By tallying the number of Smart Contracts conducting transactions with other Smart Contracts this generates a first “usage score” for all Smart Contracts. Then you run the algorithm again and calculate the “weighted score” based on the score of each Smart Contract added to the total number of transactions of all their connected Smart Contracts.

# Example:

## Step #1 (Before User Interaction): 
Daily Tally of All Transactions Between Smart Contacts Is Used To Generate A **“Usage Score”** For All Smart Contracts
- Contract A = Has 1 transaction with each B + C = 2 Transactions
- Contract B = Has 1 transaction with each A + C + D = 3 Transactions
- Contract C = Has 1 transaction with each A + B + D + F = 4 Transactions
- Contract D = Has 1 transaction with each A + B + E = 3 Transactions
- Contract E = Has 1 transaction with each A + B + C + D + E = 5 Transactions

## Step #2 (Before User Interaction): 
Daily The Usage Scores Are Added Together For Connected Smart Contacts To Generate A **“Weighted Score”** For All Smart Contracts
- Contract A = 3 + 4 = 7 Transactions  
- Contract B = 2 + 4 + 3 = 9 Transactions 
- Contract C = 2 + 3 + 3 = 8 Transactions
- Contract D = 2 + 3 + 5 = 10 Transactions

## Step 3: (Before User Interaction)
Daily The Weighted Score is multiplied by the "Dapps Score" of each Smart Contract To Generate A **"Smart Score"** For All Smart Contracts.
The Dapps Score Is Calculated By How Many Of The 10 Values The Smart Contact, Blockchain, Dapps, Or DAO has in working code.
- Contract A = 7 Transactions * Dapps Score of 10 = Smart Score of 70 
- Contract B = 9 Transactions * Dapps Score of 9 = Smart Score of 81 
- Contract C = 8 Transactions * Dapps Score of 3 = Smart Score of 24 
- Contract D = 10 Transactions * Dapps Score of 5 = Smart Score of 50

## Step 4: (Before User Interaction)
Specific Keywords / Tokens Related To The Prompt's Text Generate A List Via KeyWeb3LLM
KeyWeb3LLM is an enhancement dataset added to the Smart Agent Protocol, which was trained weekly on Web3 datasets of all smart contracts & blockchains.

## Step #5: (During User Interaction): 
User enters a prompt.
Result: KeyWeb3LLM determined Contracts A, B, C, & D are most related to the user Prompt.

## Step #5: (During User Interaction): 
KeyWeb3LLM list is ranked by the Smart Scores = Prompt Rank Output:
- Rank #1 Smart Contact B = 81
- Rank #2 Smart Contract A = 70 
- Rank #3 Smart Contract D = 50
- Rank #4 Smart Contract C = 24

## Observations
Prompt Rank put in first place the Smart Contract with the second highest Dapps Score and the second highest Weighted Score.
This seems a desirable outcome. The user's Smart Agent is presenting them with high usage & low risk options. This reduces the visibility of Smart Contracts that may be inflating their transaction count, but are centrally controlled / risky.

## Tools For Building Prompt Rank:
The Graph protocol can be used to query data from both Layer 1’s and Smart Contracts. Create A Graph of Smart Contracts to Prompt Keywords & Phrases. Existing database of Smart Contracts. Person types in a Prompt at ChatWe3.org’s website. They are presented with a list of Smart Contracts that do what they requested. If the Smart Contract offers a referral fee / donation mechanism, then use those fees to cover the gas costs for the user seamlessly, and pay out the remainder as a donation to the Smart Agent community. PromptRank.org website for devs to call the API running the prompt rank database. Of course user selection and Smart Agent transactions can add weight to the Smart Contract scores over time.

## Example Utility Score:
- OpenSea - 8,702,810 Transactions on Ethereum
- UniSwap - 4,075,274 Transactions on Ethereum
- ENS - 728,735 Transactions on Ethereum
- Blur - 559,615 Transactions on Ethereum
- Lido - 286,145 Transactions on Ethereum
- Shapeshift / FOX - 245,973 Transactions On Ethereum
- ThorChain - 235,708 Transactions on Ethereum
- FIO - 334 Transactions on Ethereum

## Example Weighted Score:
- OpenSea
- UniSwap 
- ENS
- Blur 
- Lido 
- Shapeshift / FOX
- ThorChain
- FIO
