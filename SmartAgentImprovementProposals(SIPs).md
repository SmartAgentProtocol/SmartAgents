# SmartAgent Improvement Proposals or SIPs

##  SIP 0 Defines How To Write A SmartAgent Improvement Proposal 
The Smart Agenet Improvement Proposals (SIPs) start with an open review process, include testings, and finally inclusion in a production version of the Smart Agents reference implimentation. Proposals should generally extend the capabilities of the Smart Agent's software for example by adding specific Prompts for the Smart Agent to recognize when the user requests them. Proposals that are finished with development, will be included for testing in the next candidate software version.

All SIPs should include:

- A "task specific prompt" should be defined with a few keywords or phrases to trigger the action.

- Code called from or included in the "internal" code of the downloadable Smart Agent binary install package.

- A pulbically verifiable digital signature from author of the code, version number, date, and link to the open source license details.  

- A link to the Smart Contract, Dapp, Wallet, or Blockchain's website, paper, or documentation for training of the Smart Agent's LLM weights.

- A link to cryptographically validated external Smart Contracts or APIs.

## Smart Agent Improvement Proposals Coded & Ready For Candidate Release
- SIP #1. Connecting A Web3 Wallet

Defines the Task Specific Prompt for the "open connect" code for the user to select a wallet to connect to their Smart Agent.

Prompt Keywords: Connect, Connect Wallet, Connect Web3 Wallet, Connect MetaMask, Open Connect.

Code Leveraged: Open Connect & MetaMask calls from Back End file. https://github.com/SmartAIAgents/SmartAgents/blob/main/backend/src/components/ConnectWallet.tsx    

## Smart Agent Improvement Proposals In Development

- SIP #2. Defines prompt for swapping / trading tokens using Shapeshift's open source library.

- SIP #3 Defines prompt for Earning yield on tokens using Shapeshift's open source library.

- SIP #4 Defines prompt for adding tokens to a liquidity Pool using Shapeshift's open source library.

- SIP #5 Defines prompt for Staking tokens using Lido's tool set.

## Smart Agent Improvement Proposals Concepts

- SIP #6 Defines prompt for paying user for their data using Rainfall's protocol.

- SIP #7 Defines prompt for generating images with Stable Diffusion.

- SIP #8 Define prompt for coding a website.

- SIP #9 Define prompt creating a NFT.

- SIP #10 Define prompt for finding info on an NFT.

- SIP #11 Define prompt audit this code for known bugs.

- SIP #12 Define prompt for Degen mode : )

- SIP #13 Define prompt for starting YouAI.AI style survey to personalize the Smart Agent LLM.

- SIP #14 Define prompt for registering a Ethereum Name Service.

- SIP #15 Define prompt for registering a FIO crypto handle.
