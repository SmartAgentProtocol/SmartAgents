import axios from 'axios';
import { getProvider } from '../constants/data';

async function getposition (asset : string) {
    try {
        const address =  await getProvider().getSigner().getAddress();
        var ans = '';
        await axios.get(`https://thornode.ninerealms.com/thorchain/pool/${asset}/liquidity_provider/${address}`, 
               
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

export function getPosition (asset : string) {
    const poolInfo = getposition(asset);
    return poolInfo;
}