import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { gettokens } from '../functions/get_supported_tokens'
import { getPosition } from '../functions/get_position';
import { data } from "autoprefixer";
import { getInboundAddressDetails } from '../functions/get-inbound_address'
import {withdrawLiquid} from '../functions/withdraw_liquidity'
import {ethers} from 'ethers'
import {getSaversPosition} from '../functions/get_savers_position'
import {getQuoteToWithdrawSavers} from '../functions/get_quote_to_withdraw'

function MyPositions() {
  const [selectedPool, setSelectedPool] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [tokens, setTokens] = useState([])
  const [selectedOption, setSelectedOption] = useState("");
  const [position, setPosition]  = useState("")
  const [inboundAddress, setInboundAddress] = useState("")
  const [basisPoints, setBasisPoints] = useState(0)
  const [positionInETH, setPositionInETH] = useState(0)
  const [memo, setMemo] = useState("")
  const [outBoundFee, setOutBoundFee] = useState(0)
  const [quoteError, setQuoteError] = useState(null)
  const [depositValue, setDepositValue] = useState(0)
  const [growthPercentage, setGrowthPercentage] = useState(0)


  const positions = [
    {
      name: selectedOption,
      amount: withdrawalAmount,
    },
  
  ];

  if (tokens.length == 0) {
    gettokens().then((data) => {
        setTokens(data)

    })
}

const getInboundAddress = async () => {
  const toke = search(selectedOption)
  getInboundAddressDetails("ETH").then((data) => {
      console.log(`Data Inbound : ${data.address}`)
      console.log(`Router Inbound : ${data.router}`)

      setInboundAddress(data)
  })

}
  const handleDropdownChange = (event) => {
    const val = event.target.value
      getSaversPosition(val).then((data) => {
        console.log("Position : ", data)
        
     
        
        setSelectedPool(val);
        setSelectedOption(val)
        setPosition(data)
      

        const depositInWei = parseInt(data.asset_deposit_value, 10) / 1e8;

        const valueInEth = parseInt(data.asset_redeem_value, 10) / 1e8;

        setPositionInETH(valueInEth)

        setDepositValue(depositInWei)

        setGrowthPercentage(data.growth_pct)

        getQuoteToWithdrawSavers(val, 10000).then((data) => {
          console.log("Quote : ", data)

        

          const valueInEth = parseInt(data.expected_amount_out, 10) / 1e8;

          
          console.log("valueInEth : ", valueInEth)

          

          const OutboundFeeInEth = parseInt(data.fees.outbound, 10) / 1e8;

          console.log("OutboundFeeInEth : ", OutboundFeeInEth)
          
          setMemo(data.memo)
          setOutBoundFee(OutboundFeeInEth)

          setWithdrawalAmount(valueInEth)
        }).catch((err) => {
          setQuoteError(err)
        })
        
      })
  };

 const handleCardClick = (position) => {
  if (selectedPosition === position) {
    setShowCard(false);
    setSelectedPosition(null);
  } else {
    setShowCard(true);
    setSelectedPosition(position);
    setWithdrawalAmount("");
  }
};

  const search = option => tokens.find(obj => obj.asset === option);
   

  const handleWithdrawal = () => {
    console.log(`Withdrawal amount: ${withdrawalAmount}`);

    if(quoteError != null) {
      console.log("Quote Error : ", quoteError)
      return
    }
  
    getInboundAddress();

    const toke = search(selectedOption);

    getInboundAddressDetails("ETH").then(async(data) => {

      console.log(`Outbound  Fee : ${data.outbound_fee}`)


      const res = await withdrawLiquid(
        data.address,
        position.asset_redeem_value,
        selectedOption,
        selectedOption.split("-")[1] ?? '0x0000000000000000000000000000000000000000',
        data.router,
        memo,
        parseInt(toke.nativeDecimal)
      )
    })
     
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">My Positions</h1>
      <div className="relative inline-block">
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-64"
          value={selectedPool}
          onChange={handleDropdownChange}
        >
          <option value="">Choose a Pool</option>
          {tokens.map((token) =>
                                    <option value={token.asset}>{token.asset}</option>
              )}
          </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>

<div>
<table className="table-auto w-full">
  <tbody>
    <tr>
      <td className="px-2">Deposit Value:</td>
      <td className="px-2 text-right">{depositValue} {position.asset}</td>
    </tr>
    <tr>
      <td className="px-2">Redeem Value:</td>
      <td className="px-2 text-right">{positionInETH} {position.asset}</td>
    </tr>
    <tr>
      <td className="px-2">Growth Percentage:</td>
      <td className="px-2 text-right">{growthPercentage} %</td>
    </tr>
    <tr>
      <td className="px-2 py-2" colSpan={2}><hr /></td>
    </tr>
    <tr>
      <td className="px-2">Outbound Fee:</td>
      <td className="px-2 text-right">{outBoundFee} ETH</td>
    </tr>
    <tr>
      <td className="px-2">Withdrawal Amount:</td>
      <td className="px-2 text-right">{withdrawalAmount} ETH</td>
    </tr>
  </tbody>
</table>
</div>


      <div className="flex justify-between mt-4">
              {/* <input
                className="border border-gray-300 px-4 py-2 rounded-l w-full"
                type="text"
                placeholder="Enter Percentage to Liquidate"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
              /> */}
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-r"
                    onClick={handleWithdrawal}
                  >
                    Withdraw

              </button>
            </div>
</div>

  );
}

export default MyPositions;

