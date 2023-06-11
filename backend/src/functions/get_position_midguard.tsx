import axios from 'axios';
import { getProvider } from '../constants/data';

async function getpositionMidguard (asset : string) {
    try {
        const address =  await getProvider().getSigner().getAddress();
        var ans = '';
        await axios.get(`https://midgard.ninerealms.com/v2/lp_detail/${address}`, 
               
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

export function getPositionsMidguard (asset : string) {
    const poolInfo = getpositionMidguard(asset);
    return poolInfo;
}