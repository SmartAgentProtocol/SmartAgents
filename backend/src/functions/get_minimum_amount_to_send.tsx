import axios from 'axios';
import { ethers } from 'ethers';


async function getQuoteToDeposit (asset1 : string, amount : number, decimals : number) {
    try {

    var ans = '';

    const amountInWei = Math.round(amount * 1e8);;

    console.log(amountInWei, 'amountInWei');

    await axios.get("https://thornode.ninerealms.com/thorchain/quote/saver/deposit", 
            {
                params : {
                    "asset" : asset1,
                    "amount" : amountInWei 
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

export function getMinimumAmount(asset1 : string, amount : number, decimals : number) {
        const minimumAmount = getQuoteToDeposit(asset1, amount, decimals);
        return minimumAmount;
}