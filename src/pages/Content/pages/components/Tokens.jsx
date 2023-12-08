import React, { useState } from 'react';
import { ButtonP } from '../../ui_components/Button';
import Faucet from './Faucet';

export default function Tokens() {
  const [activeComponent, setActiveComponent] = useState(null);

  const LUKSO_NETWORK_CONFIGS = {
    mainnet: {
      chainId: '0x2A', // 42
      chainName: 'LUKSO',
      nativeCurrency: {
        name: 'LYX',
        symbol: 'LYX',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.lukso.gateway.fm'],
      blockExplorerUrls: ['https://explorer.execution.mainnet.lukso.network'],
    },
  };

  const navigateToFaucet = () => {
    setActiveComponent(<Faucet />);
  };

  const navigateToBuy = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://app.uniswap.org/tokens/ethereum/0xa8b919680258d369114910511cc87595aec0be6d';
    window.open(link, '_blank');
  };

  const addNetwork = async () => {
    const ethereum = window.ethereum;

    if (!ethereum) {
      alert('No extension detected.');
      return;
    }

    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: LUKSO_NETWORK_CONFIGS.mainnet.chainId }],
      });
      alert('Your extension is now connected to LUKSO network.');
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [LUKSO_NETWORK_CONFIGS.mainnet],
          });
        } catch (addError) {
          alert(addError.message);
        }
      } else {
        alert(switchError.message);
      }
    }
  };

  return (
    <div>
      {activeComponent ? (
        <div>{activeComponent}</div>
      ) : (
        <div className=" ss-pb-2">
          <div>
            <ButtonP
              onClick={addNetwork}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Add Token to Metamask
            </ButtonP>
          </div>
          <div className='my-3'>
            <ButtonP
              onClick={navigateToFaucet}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Get Test tokens
            </ButtonP>
          </div>
          <div className="">
            <ButtonP
              onClick={navigateToBuy}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Buy LYX Tokens
            </ButtonP>
          </div>
        </div>
      )}
    </div>
  );
}
