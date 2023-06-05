# SmartAI Agents Frontend

This project represents a frontend proof-of-concept for a Web3-integrated chatbot, leveraging OpenAI's large language models. The SmartAgent chatbot can assist users with various tasks including token swaps and Ethereum staking.

## Project Structure

- Root directory: Contains the `index.js` file which initiates the backend server responsible for interacting with the OpenAI API.
- `src` directory: Houses the React.js client application.
- `.env`: This is where you'll place your OpenAI API key.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**

    ```
    git clone https://github.com/SmartAIAgents/smartaiagent-frontend.git
    ```

2. **Install dependencies:**

    Navigate into the root directory and run:

    ```
    yarn
    ```

    Then navigate into the `client` directory and do the same.

3. **Set up your OpenAI API key:**

    Create a `.env` file in the root directory and add the following:

    ```
    OPENAI_API_KEY=your_openai_key
    OPENAI_ORGANIZATION=your_openai_org
    ```

    Replace `your_openai_key` and `your_openai_org` with your actual OpenAI API key and Organization ID.

4. **Start the Node.js server:**

    In the root directory, run:

    ```
    node index.js
    ```

5. **Start the React.js client:**

    Navigate into the `client` directory and run:

    ```
    yarn start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the client app in your browser.
