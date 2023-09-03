# Notes on Weekly Status From Community 

## Week 15 September 2rd
Proposal received via email from a developer named "Morpheus" with a proposal for launching: 
"Morepheus - A Network For Powering Smart Agents"
https://docs.google.com/document/d/1E6gTjvdg2yHYJiqMxIraOLNNXA1lv8Fe20XpbwdPDi8/edit?usp=sharing

## Week 14 August 27th 2023
Docs from Scott on how to install Ollama and other branches for first local LLM test.
https://docs.google.com/document/d/152_ocHp2hr-V3gB9zvhTlYwCJHBTeUBYW44jSQuiSww/edit

## Week 13 August 20th 2023
Worked to impliment the Yellow Paper.

## Week 12 August 13th 2023
Worked to impliment the Yellow Paper.

## Week 11 August 6th 2023 
Worked to impliment the Yellow Paper.

## Week 10 July 30th 2023 Yellow Paper Development
- Writing the Yellow Paper with detailed technical specification. https://github.com/SmartAgentProtocol/SmartAgents/blob/main/YellowPaper.md
- Diagram for the Prompt Network Flow of actions from the user to LLM, to agents, to smart contracts and back.
<img width="1293" alt="PromptNetworkFlow" src="https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/9b586328-969c-43c0-a31a-f2823fabe72c">

## Week 9 July 23rd 2023 Local Install Of The Smart Agent Software
- https://github.com/SmartAgentProtocol/prem-app
- https://github.com/SmartAgentProtocol/plebai

## Week 8 July 16th 2023 Local Install Of The Smart Agent Software
- https://vercel.com/blog/introducing-the-vercel-ai-sdk
- https://agent-install-bkz6.vercel.app/
- https://github.com/DavidAJohnston/llama.cpp
- https://github.com/DavidAJohnston/ai
- https://github.com/DavidAJohnston/easydiffusion
- https://huggingface.co/datasets/bigcode/starcoderdata

## Week 7 July 9th 2023 Dedicated SDKs for Ethereum, Avalanche, Polygon, Bitcoin & Cosmos
- https://github.com/SmartAgentProtocol/SmartAgents/blob/main/SDKForAvalancheSmartAgents.md
- https://github.com/SmartAgentProtocol/SmartAgents/blob/main/SDKForBitcoinSmartAgents.md
- https://github.com/SmartAgentProtocol/SmartAgents/blob/main/SDKForCosmosSmartAgents.md
- https://github.com/SmartAgentProtocol/SmartAgents/blob/main/SDKForEthereumSmartAgents.md
- https://github.com/SmartAgentProtocol/SmartAgents/blob/main/SDKForPolygonSmartAgents.md

## Week 6 July 2nd 2023
Updates to the https://www.smartagent.org/ new links.
- https://www.chatweb3.org/ Implimentation of a working Smart Agent with Prompt Rank.
- https://github.com/SmartAgentProtocol/SmartAgents Updated name for the project.
- https://www.promptrank.org/ Final version of prompt rank documents updated
- https://smartagency.ai/ website for developers to register to build Smart Agents 

## Week 5 June 25th 2023: 

Built out the Prompt Rank website. https://www.promptrank.org/

- Resources for building the dataset for Prompt Rank. Dataset of all Smart Contacts, Sub set of Audited Smart Contracts, tools for code analysis, generalized public data sets, and article / tools for detecting smart contract hacks after deployment but before they are executed. These are the building blocks the Prompt Rank algorithm needs to intelligently make its recommendations.

- A. Decentralized Applications Security Project: https://www.dasp.co/
- B. Added fork of Ethereum Sancuarty to Smart Agents Repo: https://github.com/SmartAgentProtocol/smart-contract-sanctuary
- C. List of Audited Smart Contracts: https://huggingface.co/datasets/mwritescode/slither-audited-smart-contracts
- D. Tool for code analysis: https://semgrep.dev/
- E. Public Datasets: https://github.com/huggingface/datasets
- F. Article on using machine learning to detect hacks before they are executed. 
https://forta.org/blog/how-fortas-predictive-ml-models-detect-attacks-before-exploitation/

## Week 4 June 18th 2023: 
In depth Discussion of how to deal with ranking the presentation of Smart Contracts to the User.
Resolution was the development of the Prompt Rank paper. https://github.com/SmartAgentProtocol/SmartAgents/blob/main/Prompt%20Rank.md

Definition: The Prompt Rank algorithm creates a graph of the relationships between prompts from users & Smart Contracts. The output is a ranked list of Smart Contracts that a Smart Agent can interact with based on the user’s choice. By tallying the number of Smart Contracts conducting transactions with other Smart Contracts this generates a first “usage score” for all Smart Contracts. Then you run the algorithm again and calculate the “weighted score” based on the score of each Smart Contract added to the total number of transactions of all their connected Smart Contracts. Finally user selections will add more weights over time.

Hopefully this will provide the software a fair, dynamic, and scalable way to deal with thousands of different Smart Contracts as users prompt their Smart Agent on a wide variety of actions. This approach is a change from the idea of Prompts as Name Spaces to be claimed to defined statically as Task Specific Prompts.

## Week 3 June 11th 2023: 
Tech talk & hacking session with Scott, Pedro, Mohan, Luke and David. 

- A. Pedro and Scott advanced the Front End & Back End connection work. See updates to Github.
https://github.com/SmartAIAgents/SmartAgents
- B. Luke, Mohan and I worked through governance, eras of development and solutions around prompt name collisions. See updates to the paper.
https://docs.google.com/document/d/1cutU1SerC3V7B8epopRtZUrmy34bf38W--w4oOyRs2A/edit?usp=sharing
- C. Added a Contributor Guidelines section to Github.
https://github.com/SmartAIAgents/SmartAgents/blob/main/ContributorGuidelines.md
- D. Added more detail to the SmartAgents Improvement Proposals section, which has now been expanded to 15 proposals and is coming into more focus with the Definition of Prompts and their mapping to particular code / tool for execution. https://github.com/SmartAIAgents/SmartAgents/blob/main/ContributorGuidelines.md

## Week 2 June 4th 2023: 
Pedro, Scott & David hacked on front end and mapped actions such Staking, Swaps, and Wallet Connect to prompts with color coded action buttons.

## Week 1 May 28th 2023: 
Pedro, Scott and David hacked on front end and got basic GPT Chat style interface live and hook ups done.
