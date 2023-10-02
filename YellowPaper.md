# Smart Agent Yellow Paper
### A generalized protocol for connecting AI Agents to Smart Contracts
###### Pre-Beta | July 2023

## Overview
 => *Smart Contract is to Blockchain*, as *Smart Agent is to Generative AI.*

### What’s an Agent?
An agent is a specialized chatbot that acts on behalf of a person. 

### What’s a Smart Agent?
A Smart Agent is a standard agent that has been trained on the Smart Contract Rank algorithm, making it a tool to chat intelligently with all things web3.

### What’s the Smart Contract Rank algorithm?
At Google’s core, you’ll find the PageRank algorithm. At the Smart Agent core, you’ll find the Smart Contract Rank algorithm. Where PageRank determines the most relevant webpages, Smart Contract Rank provides the Smart Agent the best Smart Contracts to display to the user based on metrics such as number of transactions, which blockchain they execute on and level of decentralization. Full details here. https://www.SmartContractRank.org/
   
### Who is the end user?
Smart Agents let people talk to Smart Contracts with confidence because Smart Contract Rank to showing them the most used and decentralized options. So, a new adopter of crypto will use their Smart Agent as a guide. As they gain experience and become more comfortable, their Smart Agent will grow to be a daily assistant.

We see this project as the way to onboard the first billion crypto users because it removes all barriers for the user. The Smart Agent can talk using natural language and works for users on all relevant web3 topics and importantly can transact on their behalf.

1. It will be installable so important data is stored locally.
2. It will transact securely via a wallet integrated into Chromium.

<h2>Smart Agent Footprint</h2>

<div align="left">
<a href="https://github.com/SmartAgentProtocol/SmartAgents">https://github.com/SmartAgentProtocol/SmartAgents</a><br>
<a href="https://www.smartagent.org/">https://www.smartagent.org/</a><br>
<a href="https://www.chatweb3.org/">https://www.chatweb3.org/</a><br>
<a href="https://www.SmartContractrank.org/">https://www.SmartContractRank.org/</a><br>
<a href="https://www.smartagency.ai/">https://www.smartagency.ai/</a><br>
<a href="https://app.ens.domains/smartagents.eth">https://app.ens.domains/smartagents.eth</a><br>
<a href="https://twitter.com/SmartAgentsOrg">https://twitter.com/SmartAgentsOrg</a><br>
<a href="https://discord.gg/b27kweYZ">https://discord.gg/b27kweYZ</a><br>
<a href="https://t.me/SmartAIAgents">https://t.me/SmartAIAgents</a><br>
</div>

## Technology
LangchainJS will be the structure used to create the Smart Agent template. It allows us to combine six global functions necessary for all Smart Agents.

- 1. Large Language Models (communication)
- 2. Native knowledge base using Smart Contract Rank (intelligence)
- 3. Persistent memory of conversations, tasks, results, and updates (recall)
- 4. Chains of tasks (actions)
- 5. Data ingest, embedding and vector mapping (learning)
- 6. Guidelines for agent logic and behavior (logic and rules)

<img width="1293" alt="PromptNetworkFlow" src="https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/0aedf070-d6ae-4488-9b24-3f5ddd527408">

### Desktop install 
An install using ElectronJS gives us access to a local version of Chromium and Node running on a User’s machine.  This is being developed at https://github.com/betterbrand/SmartAgent-Install. 

### Wallets
The smart agent desktop app will include a Smart Agent wallet alongside Chromium or as part of the  Node backend.  The app will be packaged initially for Mac/PC/Linux.  React native or Flutter soon to follow for mo.

A Smart Agent chat plug-in to wallets will be a means to further the reach of Smart Contract Rank. 

### EVM Compatible
Using Solidity, this allows the Smart Agent Protocol to remain chain agnostic, anchoring agents in a familiar environment to all EVMs.

### Repositories
    Main:   https://github.com/SmartAgentProtocol/SmartAgents
    Other:	https://github.com/hwchase17/langchainjs
        	https://github.com/betterbrand/SmartAgent-Install
	        https://github.com/vercel-labs/ai
	        https://github.com/electron/electron
### Beta Delivery

| Local Install |   API    |
| ----------- | ----------- |
|Chromium|Memory|
|Node|Embedding|
|Wallet|LLM|
||RPC|
||HTTP|
||Vercel|

### Vercel AI SDK
In order to focus on the local install’s wallet functionality, the AI will be served during Beta through Vercel’s AI SDK, which provides granular access to a number of services:

- KV Storage and Bandwidth
- Cache Revalidations, Reads, and Writes 
- KV Databases & Commands
- Postgres Written Data, Transfer, and Compute Time	
- Source Images
- Edge Function Execution Units and Middleware Invocations
- Serverless Function Execution Time
- Bandwidth
- Edge Config Reads and Writes
- Edge Config Reads
- Web Analytics Events
- Vercel Remote Caching

*Post Beta we will start moving these services to the local install in order to remove Internet based vulnerabilities.* 

### Workflow
- 1. User consults their Smart Agent, the Smart Agent prompts the user 
- 2. A conversation takes place, then actions are taken by the Smart Agent using credentials provided by the User.
- 3. The Smart Agent reports back to the User and remembers the context and content of each conversation.  

<img width="590" alt="Agent example 1" src="https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/ea8bff61-5427-4dbd-96fe-725259e63549">

<img width="594" alt="Agent Example 2" src="https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/170a5ca4-73c4-4e1e-8d2d-c69644a4972b">

<img width="596" alt="Agent Example 3" src="https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/c7afe6aa-7a72-4ec0-b2f2-a11423ba9d2d">

#### Smart Agent Donations
For dapps outside the Smart Contract Rank algorithm, all financial transactions will add a 10% to the user.   
#### Gasless Transactions
There will be a point in which we want to analyze our Smart Agents’ actions and performance in addition to collecting the SmartAgent.org donation.  To do this in a way that is beneficial to whomever manages a Smart Agent, we can cover the gas fees as a value-add to the transaction. 

When a web3 transaction is conducted with a Smart Agent, it first goes through a Smart Agent contract that verifies identity and intent.  A third party covering gas fees or internal Paymaster will be implemented to obfuscate the installation address and onboard users into new networks in the future.

### Languages & Protocol
Version 1.0 is going to be developed using the JS version of LangChain with a number of components

|Function|Beta API|
| ----------- | ----------- |
|LLM|LLAMA|
|Memory|Pinecone|
|Ingest & Embedding|Huggingface|
|Agent Architecture|Langchain|
|Document Training & Testing|Botpress|

### Conclusion
The Smart Agent tech stack is built on the latest AI Agent tools with an eye for extending them to the world of EVMs, Smart Contracts, and Web3 tools. Opening up this work of wallets, Dapps, DAOs and more to the average person with no technical ability required and in a way that will guide them toward the safest, best used, and most decentralized options available.
