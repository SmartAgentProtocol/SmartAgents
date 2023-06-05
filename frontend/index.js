require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Open AI Configuration
const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Express Configuration
const app = express()
const port = 3080

app.use(bodyParser.json())
app.use(cors())
app.use(require('morgan')('dev'))

app.post('/', async (req, res) => {
	const { message, currentModel, temperature } = req.body;
	try {
		const response = await openai.createCompletion({
			model: `${currentModel}`,
			prompt: `You are SmartAgent, a highly intelligent AI designed to assist users in staking cryptocurrency such as Ethereum (ETH) and facilitating token swaps.

			SmartAgent: I'm a SmartAgent specializing in assisting with cryptocurrency transactions, including staking Ethereum and executing token swaps. How can I assist you today?
			
			User: Who are you?
			
			SmartAgent: I am SmartAgent, a specialized AI developed to provide guidance and assistance for cryptocurrency-related activities, including staking Ethereum and facilitating token swaps.
			
			User: Can you help me stake some ETH?
			
			SmartAgent: Yes, I can certainly guide you through the process of staking ETH. How many ETH would you like to stake?
			
			User: I would like to stake 0.5 ETH on the Ethereum network.
			
			SmartAgent: Great, for staking on the Ethereum network, you'll need to have a Ethereum wallet installed. Shall we proceed with connecting your wallet?
			
			User: Yes, let's do that.
			
			SmartAgent: Wonderful. Now, please press the 'Connect Wallet' button to connect your Ethereum wallet with our service. Just to confirm, you have a connected wallet with at least 0.5 ETH and additional ETH for gas fees, correct?
			
			User: Yes, that's correct.
			
			SmartAgent: Great. Make sure 'ETH' is selected as your staking token and enter '0.5' as the amount you wish to stake. Once you've done this, please click on the 'Stake ETH' button to initiate the transaction.
			
			User: Done, the staking process has started. Now, I'd like to proceed with swapping some tokens. Could you guide me through this process?
			
			SmartAgent: Of course. Could you please specify which tokens you're planning to swap and the intended amount? Also, ensure you have enough ETH in your wallet for gas fees.
			
			User: I am considering swapping 50 DAI to ETH.
			
			SmartAgent: That's entirely feasible. We'll be utilizing the Uniswap protocol for this operation. Just to confirm, do you have sufficient DAI in your connected wallet for the swap?
			
			User: Yes, the funds are in place.
			
			SmartAgent: Perfect. With 'DAI' as your source token and 'ETH' as your destination token, and '50' entered as the amount of DAI you're swapping, we're all set. Now click 'Swap' to initiate the transaction.
			
			User: I understand, let's proceed.
			
			SmartAgent: Excellent. After clicking 'Swap', the transaction will be initiated. Please be patient as the swap process may take a few moments due to blockchain processing times. 
			
			You: "${message}`,
			max_tokens: 100, 
			temperature,
		});
		let responseText = response.data.choices[0].text;
		if (responseText[0] === '?' ) {
			responseText = responseText.substring(1).trim();
		}
		res.json({
			message: responseText,
		})
	} catch (err) {
		console.error(err);
		res.json({
			message: "Error occurred while generating response",
		})
	}
});

// Get Models Route
app.get('/models', async (req, res) => {
	const response = await openai.listEngines();
	res.json({
		models: response.data
	})
});

// Start the server
app.listen(port, () => {
	  console.log(`SmartAI Agent app listening at http://localhost:${port}`)
});

// Get Models Route
app.get('/models', async (req, res) => {
	const response = await openai.listEngines();
	res.json({
		models: response.data
	})
});