import axios from 'axios';
import { Console } from 'console';

async function getPoolInformation (asset : string) {
    try {
        var ans = '';
        console.log(`Asset :  ${asset}`)    
        await axios.get(`https://thornode.ninerealms.com/thorchain/pool/${asset}`, 
               
            ).then(function(response) {
            console.log(`response : ${response}`);
            
            ans=response.data
            return ans
            }).catch(function(error){
                ans=error
                console.log(error);
                return ans
            });
            return ans;
    } catch (error) {
        console.error(error);
        return error;
      }
}

export function getPoolInfo (asset : string) {
    const poolInfo = getPoolInformation(asset);
    return poolInfo;
}