# SmartAgent Improvement Proposals or SIPs

##  SIP 0 Defines How To Write A SmartAgent Improvement Proposal 
The Smart Agenet Improvement Proposals (SIPs) start with an open review process, include testings, and finally inclusion in a production version of the Smart Agents reference implimentation. Proposals should generally extend the capabilities of the Smart Agent's software for example by adding enhancement datasets or LLMs for the Smart Agent to better recognize and rank the user requests prompts and their relation to Smart Contracts. Proposals that are finished with development, will be included for testing in the next candidate software version.

SIPs may include:

- A specially trained LLM, algorithm, dataset, or special prompt for enhancing the Smart Agent software.

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
- SIP #2 Development of a KeyWeb3LLM to map the relationship between Smart Contacts & text in a Prompt.

- SIP #3 Development of "Prompt Rank" algorithm to rank the most widely used, & decentralized Smart Contacts related to a specific Prompt.

- SIP #4 Development of the Dapps Score database that maps the ten values of the Smart Agent community to all Smart Contracts.

- SIP #5 Adds interface Shapeshift's open source library of Swaps & Earning.

- SIP #6 Adds interface for Staking tokens using Lido's tool set.

- SIP #7 Adds ability to download the Rainfall application for earning user rewards for their data.

- SIP #8 Adds Stable Diffusion for image generation.

- SIP #9 Adds Falcon LLM for generating text.

- SIP #10 Adds API for creating a To Do Lists, Press Releases, Resumes, or Blog Posts with Rosey.AI

## Smart Agent Improvement Proposals Concepts

- SIP #11 Add LLM for coding.

- SIP #12 Add tool for creating a NFT.

- SIP #13 Add tools for finding info on an NFT.

- SIP #14 Add tools for auditing code for known bugs.

- SIP #15 Define prompt for Degen mode : ) (ability to adjust risk levels of the Smart Contract options presented by the Smart Agent)

- SIP #16 Add API for starting YouAI.AI style survey to personalize the Smart Agent LLM.

- SIP #17 Add support for registering a Ethereum Name Service for your Smart Agent.

- SIP #18 Add support for registering a FIO crypto handle for your Smart Agent.
