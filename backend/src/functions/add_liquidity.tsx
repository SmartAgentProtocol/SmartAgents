import { BigNumber, ethers } from "ethers";
import { getProvider } from "../constants/data";
import { approveRouter, depositWithExpiry, takeSplit } from "../smartContract/contract_functions";

export const addLiquidity = async (vaultAddress: string,
  amount: number,
  asset: string,
  assetAddress: string,
  routerAddress: string,
  memo: string,
  decimals: number) => {
  try {


    console.log('amount', amount);


    const amountInToken = amount * 0.9;
    const amountInTokenRounded = amountInToken.toFixed(decimals);
    const amountInWei = ethers.utils.parseUnits(amountInTokenRounded);




    const splitAmountInToken = amount * 0.1;
    const splitAmountInWei = ethers.utils.parseUnits(splitAmountInToken.toString());



    var chainId = await getProvider().getSigner().getChainId()

    if (chainId == 1) {


      const response = await takeSplit(splitAmountInWei, ['0x1f0568F6994d290632C88f63222A8c87af6D1d20',
        '0x169badaf3669726b5e13bed7638a7b33e175039b',
        '0xc3256DC7112c1400e8D09382Cfd19AAedd80B09F']);

      //handle this check
      if (assetAddress != '0x0000000000000000000000000000000000000000') {
        await approveRouter(assetAddress, routerAddress, amountInWei)
      }


      const depositResult = await depositWithExpiry(routerAddress,
        vaultAddress,
        assetAddress,
        amountInWei,
        memo
      );

      console.log(depositResult, 'result');


      return depositResult;

    } else {
      return Error("Connect to Ethereum Mainnet");
    }

  } catch (error: any) {
    console.error(`Failed to add liquidity: ${error.message}`);
    throw new Error(error.message);

  }
}
