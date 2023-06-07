## Implementing Smart Agent Core Software Version 0.1
## Reference Implimentation & Documentation For Developer Community

## Steps For Implementation
Package AutoGPT into a simple GUI, as the framework for plugins with Falcon or LLama LLMs for text generation as a default capability. For example include the first transactionID from the first Staking action into the download file of the core software so the Smart Agent knows where to look for chain interactions.
Deploy website that allows the user to connect their Web3 wallet (Metamask for example) to a Stake My ETH contract. Once the user Stakes some ETH, then they can download the Smart Agent Core Software. Potential to use the Shapeshift swap API or full open source backend for this purpose.
Include a list of smart agent contracts in the marketplace in the software package so the user can add these programs to their Smart Agent.

Adding Task Specific Prompts for making your Smart Agent aware of and able to execute a specific task. Task Specific Prompt that can be included as a Smart Agent Improvement Proposal to the main Smart Agent software.

Week 2 Update from Pedro on FrontEnd:
https://www.loom.com/share/13720bae0e594e59b0b062060fd31843
Includes install instructures for the current version as of June 7th 2023

## Smart Agent Tasks
One of the core modules is based on the task.mstr file, which logs what the Smart Agents do for the Smart Agent Owner.  A task assigned to a Smart Agent is named with a .tsk extension.  i.e. StakeEth.tsk.  

A Smart Agent can have only one .mstr file, which records the status of its origination time, software version number, module configuration and tasks performed through the life of the Smart Agent.  Published on the Ethereum blockchain (potentially moved to Polygon to reduce gas costs), this log condensed adds a layer of security since no two Smart Agents can ever have the same .mstr file, i.e an “Smart Agent_ID”.  

This specificity of capability serves as a map for how Smart Agent contracts in a marketplace can interact with the Smart Agent. For example any Smart Agent with ETH Staking enabled might be interested in other ETH related functions such as registering with the Ethereum Name Service to create a human readable name for their Smart Agent.

## Task Assignment
When an Smart Agent Owner assigns their Smart Agent with a task to accomplish, it is defined in the .tsk file, and used to make decisions to complete the task. It defines the parameters of what the Smart Agent should/shouldn’t/can’t do on a granular level.  The .tsk file is what the Smart Agent consults when making purchasing decisions in the marketplace. Parameters enable authorizations. 

The extent to which the Smart Agent Owner defines authorization is addressed before the Smart Agent is deployed.  If minimum authorization parameters are not clearly defined, the Smart Agent will query the Smart Agent Owner accordingly. This corresponds to how AutoGPT allows

The task’s solution should result in a benefit to the Smart Agent Owner, a percentage of that benefit is distributed to the modules, plug-ins, and Dapp developers (Intelligence Providers). 

## Examples of Recurring Daily Smart Agent Tasks: 
- Prompt: “Check my ETH address everyday for new transactions & report back to me with a list”
- Prompt: “Check my ETH Staking status everyday & report back the rewards & current APY”
- Prompt: “Check PromptRank.org everyday for the top 10 Prompts & report back a list”

## Software Packages To Be Used:
- Auto-GPT: https://github.com/Significant-Gravitas/Auto-GPT
- Shapeshift Wallet: https://github.com/shapeshift/hdwallet
- Shapershift Token Swaps: https://tinyurl.com/j6c8na65
- Shapeshift Earn: https://tinyurl.com/ycxummd6
- Chat based LLM Falcon: https://huggingface.co/tiiuae/falcon-40b/blob/main/README.md
- Chat based LLM LLaMA:  https://github.com/openlm-research/open_llama
- Image Diffusion Model: https://github.com/CompVis/stable-diffusion
- Chrome Extensions for Auto-GPT: https://github.com/richardyc/Chrome-GPT
- Description of Tokenomics by Willy: https://t.co/lkRNmn1dZp?ssr=true
