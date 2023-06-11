import axios from 'axios';

async function getCheckHealth () {
    try {
        var ans=''
        await axios.get("https://thornode.ninerealms.com/thorchain/ping")
        .then(function(response){
          ans=response.data
          return ans
        })
        .catch(function(error){
          ans=error
            return ans
        });
        return ans;

      } catch (error) {
        console.error(error);
        return error;
      }
}

export function getHealth() {
  const health = getCheckHealth();
  return health;
}