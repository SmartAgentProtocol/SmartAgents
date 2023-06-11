import React, { useState } from 'react';


const ToggleText = () => {
  const [isTextShown, setIsTextShown] = useState(false);

  const handleToggle = () => {
    setIsTextShown(!isTextShown);
  };

  return (
    <div>
Thanks to all those joining us by Staking For Freedom. We list here the core values of the Network Nation which you agree to by signing your transaction on NetworkNation.org

These 10 values embody the type of communities, projects & freedom tech NetworkNation.org was built to help its community donate to.


      {isTextShown && 
      <p>
        <ol className='list-decimal m-5' >
<li><span className='font-semibold'> Open Source</span>: The software code under pinning the Network Nation must be freely reviewable, editable & copyable by all.</li>

<li><span className='font-semibold'>Peer to Peer</span>: A system which allows for direct connection by all and is free of centralized intermediaries in all their functions.</li>

<li><span className='font-semibold'>Public Blockchain</span>: A distributed public immutable ledger / system of record for interactions of the Network Nation members. This can be used as proof that a Network Nation is following its own rules and offers a high level of transparency in the system.</li>

<li><span className='font-semibold'>Tokenized Ownership</span>: Setting forth the means of rewarding participants & stake holders in the Network Nation.</li>

<li><span className='font-semibold'>Permissionless</span>: No one should be required to ask an authority to use the public features of the Network Nation.</li>

<li><span className='font-semibold'>Freedom of Access</span>: No one should have their use of the application blocked or otherwise censored when using a Network Nation.</li>

<li><span className='font-semibold'>Privacy Preserving</span>: No one should have to expose their private information to use a Network Nation.</li>

<li><span className='font-semibold'>Freedom of Choice / Exit</span>: No one should be forced to continue running software or otherwise participate in a Network Nation if they choose to leave or join another Network Nation.</li>

<li><span className='font-semibold'>Self Sovereign Identity</span>: All users have the power to generate their own identities and their consent is required to use those credentials.</li>

<li><span className='font-semibold'>Freedom of Association</span>: Members of a Network Nation must be free to practice free association between themselves.</li>
</ol>

<p className='text-center font-bold py-4'>Support Network Nations</p>
<p className='py-3'>Bitcoin, Ethereum, Cosmos, Avalanche, Doge and similar communities are evolving and starting to take on the characteristics of “Nations”. Giving birth to what we term “Network Nations”.</p>

<p className='py-3'>People now often use “Bitcoiner” or member of the Ethereum community as one of their primary identifiers. These aren’t just tokens people hold, these communities have common values and protect each other’s property with encryption, decentralized consensus & smart contracts.</p>

<p className='py-3'>This mutual protection of property for all the 200 Million + people building value in these Network Nations has allowed the growth of a $1 Trillion of wealth and secures over $25 Trillion worth of commerce each year.</p>

<p className='py-3'>These characteristics are the foundation of all nations. Shared identity, values & protecting one another are the building blocks of any society.</p>

<p className='py-3'>Not all public blockchains are Network Nations in the making, however we adopt this Constitution as a useful definition and common set of values.  If you are interested in building a specific Network Nation, please submit a <a className='underline' href='https://github.com/betterbrand/N2/tree/Freedom-Improvement-Proposal'> freedom improvement proposal</a> pull request describing the project and a wallet addess for people to donate to.</p>
  
        </p>}
<div className={`flex justify-center ${isTextShown ? 'flex-col-reverse' : 'flex-col'}`}>
  <button onClick={handleToggle} className="underline">{isTextShown ? 'Less' : 'More'}</button>
</div>
    </div>
  );
};

export default ToggleText;
