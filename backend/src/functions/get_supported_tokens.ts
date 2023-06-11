import axios from 'axios';

async function getSupportedTokens() {
  let ans = [];
  try {
      const response = await axios.get("https://midgard.ninerealms.com/v2/pools");
      const data = response.data;
      // Filter the list to show only assets without any extra characters
      ans = data.filter(token => !token.asset.includes("-") && !token.asset.includes(":"));
  } catch (error) {
      console.log(error);
  }
  return ans;
}

export async function gettokens() {
  const tokens = await getSupportedTokens();
  return tokens;
}
