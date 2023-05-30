# Core
Core Smart Agent Software Containing Auth-GPT, LLMs, Extensions &amp; Memory 

Smart Agents
Building Open Source AGI With Humans At Its Heart

Community Paper Written In Public As A Living Document

Introduction:
Smart Agents is a term to describe the framework for connecting Self Sovereign Web3 wallets & identities to AutoGPT & LLMs so that they can take economic actions on behalf of the user.

By connecting your Web3 wallet to AutoGPT you enable a Smart Agent to create transactions on your behalf. In this framework the Smart Agent is an extension of you, acts according to your instructions, leverages your wallet & data to act on your behalf. Your Smart Agent is controlled by your Web3 private keys as you authorize actions for it to take. Because your Smart Agent has a Web3 address now smart contracts or other Smart Agents can interact with it thus giving birth to the AI to AI economy with individual people at its heart.

An example would be instructing your Smart Agent via a prompt to “Stake my ETH”. A developer having already contributed a smart contract for ETH Staking to the framework, the Smart Agent calls that smart contract to generate a transaction and asks the user for authorization to Stake the ETH in their wallet. It also informs the user the smart contract it selected “is non custodial and is returning about 5% per year in yield and that you can withdraw your ETH at any time.” All within a simple natural language interface.

The Line Between Smart Agents & Smart Contracts
The line between the Smart Contract frame and the Smart Agent one is the active intelligence and the persistent connection to a person's data, tasks, goals, wallet and so forth.

Think of the Smart Agent as an extension of yourself. It’s your data, it’s your money, they are your prompts, it’s all you (the Smart Agent is all internal). And Smart Contract being external. In short, your Smart Agent interacts with and trades with Smart Contracts.

Motivations:
The key to avoiding a Dystopian future is giving Sovereign Individuals control over their data, money, and personal AI. Instead of giving away all our rights to some company mining our data for their purposes or government seeking to control our actions.

Instead, let's build a world where every morning you wake up and your Smart Agent has lined up cool things it can do for you today, and new extensions to its abilities are available to add to your Smart Agent. We are getting pretty close to that day. The pieces are all here now, let's build it together.

Incentivizing A Community of Developers Building Toward Open Source AGI
The vision is for developers to each contribute programs (Intelligence) that add new capabilities to the Smart Agents everyone can use. In return the users earning yield from their Smart Agents donate a part of that yield back to the community of developers who contributed the programs their Smart Agent used (Intelligence Providers or IPs). 

For example if the “Stake My ETH” program is used by 10,000 Smart Agents to generate 700 ETH over 1 year for the owners of the Agents, the developer who contributed the “Stake My ETH” program would get 70 ETH worth of donations (10% of the yield generated).

This way the Smart Agent developer community building up the capabilities of the Smart Agents directly benefits from the tools they build and share in rewards the Smart Agent generates. 

There is a great thread by Willy from Shapeshift on this topic of the best way to create these type of Opt In fees 

The Economic Model of Smart Agents - Introducing IPs (Intelligence Providers)
Users used to pay for software with money or their data.
Now with Smart Agents the software earns money for the user.

In UniSwap a user can be a Liquidity Provider. These LPs stake tokens to various pools and thus provide the capital that powers the UniSwap Automated Market Makers (AMMs). This is what makes UniSwap so good at providing instant swaps of tokens so near the market price. 

For Smart Agents we can use the term Intelligence Providers (IPs) that contribute their smart contract, code, Dapps for use by the Smart Agents. Then the IP providers can be rewarded from all the value created by the intelligence they provide.

Intelligence Providers Examples:
Snowball The App for Generating Yield: https://www.snowball.money/


AI with Crypto Knowledge, transaction database with LLM interface. https://wiseone.ai/#


The Software Stack
The Smart Agent program will be downloaded locally and come configured with AutoGPT which makes it simple to add different LLMs or connect data sources to make your Smart Agent more useful. Capabilities of AutoGPT include: https://github.com/Significant-Gravitas/Auto-GPT
🌐 Internet access for searches and information gathering
💾 Long-term and short-term memory management
🧠 GPT-4 instances for text generation
🔗 Access to popular websites and platforms
🗃️ File storage and summarization with GPT-3.5
🔌 Extensibility with Plugins
Similarly the selection of which Web3 wallet used is also the choice of the user. The key in the framework is the standardized way the Wallet, the LLMs, and the modules all work together.

The Smart Agent Core Software
The Smart Agent Core software package can be installed on your local computer and comes with some basic default capabilities such as AutoGPT with LLaMa pre-installed and the ETH Staking program. Developers that contribute to this core software will gain part of the ETH yield from the Staking and other default programs running on the Core software. Thus creating an incentive for people to improve the Smart Agent itself. All code contributions merged into the project will be counted as weights in the distribution of rewards from the Core software.

Insert Diagram of Smart Agent Core Software

https://github.com/Significant-Gravitas/Auto-GPT
https://github.com/richardyc/Chrome-GPT
https://github.com/openlm-research/open_llama
https://github.com/Significant-Gravitas/Auto-GPT/blob/stable/autogpt/memory/weaviate.py

Smart Agent Contract Marketplace
Since the Smart Agent has its own resources from the ETH Staking it carries a balance with which to purchase more modules, plug-ins, Dapps, referred to as “Smart Agent Contracts” in the open marketplace. These could be niche language models, image or video generators, DeFi plug-ins to earn yield – anything a Smart Agent Contract developer could imagine. The Web3 ID serves as the means to access to these programs and persistently show they have been licensed by a particular user’s Smart Agent. 

Steps For Implementation
Package AutoGPT into a simple GUI, as the framework for plugins with LLama for text generation as a default capability. For example include the first transactionID from the first Staking action into the download file of the core software so the Smart Agent knows where to look for on chain interactions.
Deploy website that allows the user to connect their Web3 wallet (Metamask for example) to a Stake My ETH contract. Once the user Stakes some ETH, then they can download the Smart Agent Core Software. Ready to deploy.
Include a list of smart agent contracts in the marketplace in the software package so the user can add these programs to their Smart Agent.

Values To Imbue In Our Smart Agents & For Dev Contributions To Be Ranked By
Open Source: The software code underpinning the Smart Agents must be freely reviewable, editable & copyable by all.
Peer to Peer: A system which allows for direct connection by all and is free of centralized intermediaries in all their functions.
Public Blockchain: A distributed public immutable ledger / system of record for interactions of the Smart Agent. This can be used as proof that a Smart Agent is following its own rules and offers a high level of transparency in the system.
Tokenized Ownership: Setting forth the means of rewarding participants & stakeholders contributing to Smart Agents.
Permissionless: No one should be required to ask an authority to access their Smart Agent.
Freedom of Access: No one should have their use of the Smart Agent blocked or otherwise censored.
Privacy Preserving: No one should have to expose their private information to use their Smart Agent.
Freedom of Exit: Acts taken by the Smart Agent should have a means of a defined exit from participation.
Self Sovereign Identity: All users have the power to generate their own identities and their consent is required to use those credentials.
Freedom of Association: All those using Smart Agents maintain their independence and freedom of association. 

Smart Agent (SAgent) Tasks
One of the core modules is based on the task.mstr file, which logs what the SAgents do for the SAgent Owner.  A task assigned to an SAgent is named with a .tsk extension.  i.e. StakeEth.tsk.  


Note the use of “SAgent” as the shortened term for Smart Agents to avoid confusion with non Web3 enabled AI agents. Pronounced “Sage-gent”. Gives connotations of a sage or wise agent.

A SAgent can have only one .mstr file, which records the status of its origination time, software version number, module configuration and tasks performed through the life of the SAgent.  Published on the Ethereum blockchain (potentially moved to Polygon to reduce gas costs), this log condensed adds a layer of security since no two SAgents can ever have the same .mstr file, i.e an “SAgent_ID”.  

This specificity of capability serves as a map for how SAgent contracts in a marketplace can interact with the SAgent. For example any SAgent with ETH Staking enabled might be interested in other ETH related functions such as registering with the Ethereum Name Service to create a human readable name for their Smart Agent.

Task Assignment
When an SAgent Owner assigns their SAgent with a task to accomplish, it is defined in the .tsk file, and used to make decisions to complete the task. It defines the parameters of what the SAgent should/shouldn’t/can’t do on a granular level.  The .tsk file is what the SAgent consults when making purchasing decisions in the marketplace. Parameters enable authorizations. 

The extent to which the SAgent Owner defines authorization is addressed before the SAgent is deployed.  If minimum authorization parameters are not clearly defined, the SAgent will query the SAgent Owner accordingly. This corresponds to how AutoGPT allows

The task’s solution should result in a benefit to the SAgent Owner, a percentage of that benefit is distributed to the modules, plug-ins, and Dapp developers (Intelligence Providers). 

Examples of Recurring Daily Smart Agent Tasks. 
Prompt: “Check my ETH address everyday for new transactions & report back to me with a list”
Prompt: “Check my ETH Staking status everyday & report back the rewards & current APY”
Prompt: “Check PromptRank.org everyday for the top 10 Prompts & report back a list”

Community Websites / Social Channels Under Development:
SmartAgent.ETH - Place for Ethereum specific Smart Agent content.
SmartAgent.Dev - Website where you can download the Smart Agent Core software
PromptRank.org (list CoinGecko but for ranking popular Smart Agent actions called by prompt)
SmartAgentRank.com (list CoinGecko but for ranking popular Smart Agent contracts)
SAgent.app - Possible use for the marketplace for applications that extend SAgents.


Reddit: https://www.reddit.com/r/SmartAgents/
Github: https://github.com/SmartAIAgents
Twitter: https://twitter.com/SmartAIAgents
Discord: https://discord.gg/zyUXYteh
Telegram: https://t.me/+TreIfW9DYhcyYWFj

Design Elements: 
Merging Human & Machine Intelligence
Advanced, futuristic, optimistic.
