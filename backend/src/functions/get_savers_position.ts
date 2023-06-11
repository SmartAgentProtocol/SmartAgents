import axios from 'axios';
import { getProvider } from '../constants/data';

async function getSaversPos (asset : string) {
    try {
        const address =  await getProvider().getSigner().getAddress();
        var ans = '';
        await axios.get(`https://thornode.ninerealms.com/thorchain/pool/${asset}/saver/${address}`, 
               
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

export function getSaversPosition (asset : string) {
    const poolInfo = getSaversPos(asset);
    return poolInfo;
}