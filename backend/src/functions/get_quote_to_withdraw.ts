import axios from 'axios';
import { ethers } from 'ethers';
import { getProvider } from '../constants/data';


async function getQuoteToWithdraw (asset1 : string, basisPoints : number) {
    try {

    var ans = '';

    const address =  await getProvider().getSigner().getAddress();

    

    await axios.get("https://thornode.ninerealms.com/thorchain/quote/saver/withdraw", 
            {
                params : {
                    "asset" : asset1,
                    "address" : address,
                    "withdraw_bps" : basisPoints
                }
            }
        ).then(function(response) {
        ans=response.data
    	return ans
        }).catch(function(error){
            ans=error
            return ans
        });
        return ans;
      } catch (error) {
        console.error(error);
        return error;
      }
}

export function getQuoteToWithdrawSavers(asset1 : string, basisPoints : number) {
        const minimumAmount = getQuoteToWithdraw(asset1, basisPoints);
        return minimumAmount;
}