import { BigNumber, ethers } from "ethers";
import { getProvider } from "../constants/data";
import { approveRouter, withdrawLiquidity, takeSplit } from "../smartContract/contract_functions";

export const withdrawLiquid = async (vaultAddress: string, 
  amount: number,
  asset : string,
  assetAddress : string,
  routerAddress : string,
  memo : string,
  decimals : number)  => {
  try {

  console.log("Memo ", memo)
    
    

    var chainId = await getProvider().getSigner().getChainId()

    if(chainId == 1) {
       
     if(assetAddress != '0x0000000000000000000000000000000000000000') {
      await approveRouter(assetAddress, routerAddress, BigNumber.from(amount));
     }

     
     const depositResult = await withdrawLiquidity(routerAddress, 
      vaultAddress, 
      assetAddress,
      BigNumber.from(amount),
      memo
    );
    
    console.log(depositResult, 'result');
       
       
    return depositResult;
      
    } else {
      return Error("Connect to Ethereum Mainnet");
    }

  } catch (error : any) {
    console.error(`Failed to add liquidity: ${error.message}`);
    throw new Error(error.message);

  }
}
