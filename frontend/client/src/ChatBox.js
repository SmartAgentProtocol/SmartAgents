import React from 'react';
import Web3 from 'web3';
import './index.css';

// Primary Chat Window
const ChatBox = ({chatLog, setChatInput, handleSubmit, chatInput}) =>
  <section className="chatbox">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-input-holder">
        <form className="form" onSubmit={handleSubmit}>
          <input 
            rows="1"
            value={chatInput}
            onChange={(e)=> setChatInput(e.target.value)}
            className="chat-input-textarea" 
          ></input>
          <button className="submit" type="submit">Submit</button>
        </form>
      </div>
  </section>

// Individual Chat Message
const ChatMessage = ({ message }) => {
  const showConnectWalletButton = message.user === "gpt" && message.message.includes("Connect Wallet");
  const showStakeETHButton = message.user === "gpt" && message.message.includes("Stake ETH");
  const showSwapButton = message.user === "gpt" && message.message.includes("Swap");

  async function handleConnectWallet() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        console.log('Connected accounts:', accounts);
      } catch (error) {
        console.error("User denied account access");
      }
    } 
    else if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);
      const accounts = await web3.eth.getAccounts();
      console.log('Connected accounts:', accounts);
    } 
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async function handleStakeETH() {
    console.log('Staking operation initiated...');
  }

  async function handleSwap() {
    console.log('Swapping operation initiated...');
  }

  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className="avatar-section">
          <div className={`avatar ${message.user === "gpt" && "chatgpt"}`} style={{backgroundColor: 'transparent'}}>
            {message.user === "gpt" ? 
            <img src="/logo.jpeg" alt="SmartAgent" style={{width: '50px', borderRadius: '50%'}} /> 
            : 
            <img src="/User.JPG" alt="Pedro" style={{width: '50px', borderRadius: '50%'}} /> }
          </div>
        </div>
        <div className="message-section">
          <div className="message">
            {message.message}
          </div>
        </div>
      </div>
      <div className="button-section chat-message-center">
          {showConnectWalletButton && <button onClick={handleConnectWallet} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded action-btn">Connect Wallet</button>}
          {showStakeETHButton && <button onClick={handleStakeETH} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded action-btn">Stake ETH</button>}
          {showSwapButton && <button onClick={handleSwap} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded action-btn">Swap</button>}
        </div>
    </div>
  );
}

export default ChatBox
