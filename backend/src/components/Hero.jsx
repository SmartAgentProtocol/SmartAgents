import { useId, useRef, useState,useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '../components/AppScreen'
import { AppStoreLink } from '../components/AppStoreLink'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { PhoneFrame } from '../components/PhoneFrame'

import {gettokens} from '../functions/get_supported_tokens'
import {addLiquidity} from '../functions/add_liquidity'
import {getTransactionStatus} from '../functions/get-transaction-status'
import {getPoolInfo} from '../functions/get_pool_info'
import {getMinimumAmount} from '../functions/get_minimum_amount_to_send'



export function Hero() {
  const [tokens, setTokens] = useState([])
  const [pool,setPool] = useState('');
  if(tokens.length==0){
    gettokens().then((data)=>{
      setTokens(data)
      getPoolInfo('AVAX.AVAX').then((data)=>{
        setPool(data.status)
    })
    })
  }
  
  const [selectedOption, setSelectedOption] = useState('AVAX.AVAX');
  
  const [status,setStatus]=useState('')
  const [quote,setQuote ]= useState('')
  const [amt,setAmt] = useState(1)
  const [quoteError,setQuoteError] = useState('')
  const handleToken = (event)=>{
    const val = event.target.value
    getPoolInfo(val).then((data)=>{
      setSelectedOption(val) 
      setPool(data.status)
    })

  }
  const search = option => tokens.find(obj=>obj.apiIdentifier===option);
  const getQuoteHandler = (event)=>{
    
      const toke = search(selectedOption)
      console.log(toke.decimals )
      document.getElementById("quoteSpinner").className="flex justify-center items-center inline-block"
      getMinimumAmount(selectedOption,amt,toke.decimals).then((data)=>{
        console.log(data)
        setQuote(data)
        setQuoteError('')       
        document.getElementById("quoteSpinner").className="flex justify-center items-center hidden"
      }).catch((error)=>{
        setQuoteError(error)
        document.getElementById("quoteSpinner").className="flex justify-center items-center hidden"
      })
   
  }
  const amtChange = (e)=>{
    const val =e.target.value
    setAmt(val)
    document.getElementById("aLabel").className="text-black-600"   
  }
  const addLiquid = (event)=>{
    if(quoteError.length==0){
      const item = search(selectedOption)
      addLiquidity(quote.inbound_address,amt,item.chainId).then((data)=>{
        console.log(data)
      })
    }
  }
  
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Stake For Freedom
            </h1>
            <br />
            <br />
            <p id="pool">Selected Coin: <span className="text-blue-600">{selectedOption}</span>
            </p>
            <p className="mt-6 text-lg text-gray-600">
              
            </p>
            <select
              value={selectedOption}
              onChange={handleToken}
              >
              {tokens.map((token)=>
                <option value={token.apiIdentifier}>{token.name}</option>
            )}
            </select>
            <br />
            <br />

            <p>Pool Information: <span className="text-blue-600">{pool}</span>
            </p>
      
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">

                <label id="aLabel">Enter Amount:  
                  <input  onChange={amtChange}id="amountInput"type="number" name = "amount" Input Amount />
                </label>

              </div>
              <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
                <p className="text-sm text-blue-600 font-semibold text-gray-900 lg:text-left">
                  Expected Amount Out:              {quote.expected_amount_out}                    
                  <span className="text-red-600">{quoteError}{quote.error}</span>         
                </p>
              </div>
              <div className="flex justify-center items-center hidden" id = "quoteSpinner">
                <div  className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-blue-600" role="status">
                  <span className="visually-hidden">.</span>
                </div>
              </div>
              <Button
                onClick={getQuoteHandler}
                variant="outline"
              >
              <span className="ml-2.5">Show Quote</span>
              </Button>
            </div>
            <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
              <Button
              onClick={addLiquid}
                variant="outline"
              >
                <span className="ml-2.5">Add Liquidity</span>
              </Button>
              <p>
                {status}
              </p>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <Image src="/betterbrand-logos_transparent.png" alt="NetworkNation"layout="fill"
            objectFit="cover"
            quality={100}/>
          </div>
        </div>
      </Container>
    </div>
  )
}