import React, { useEffect, useState } from 'react';
import Onboard from '@web3-onboard/core';
import luksoModule from '@lukso/web3-onboard-config';
import injectedModule from '@web3-onboard/injected-wallets';
import { ButtonP } from '../../ui_components/Button';

const SignInButton = ({ onSignInSuccess }) => {
  const [onboard, setOnboard] = useState(null);

  useEffect(() => {
    const initializeOnboard = async () => {
      const lukso = luksoModule();
      const injected = injectedModule({
        custom: [lukso],
        sort: (wallets) => {
          const sorted = wallets.reduce((sorted, wallet) => {
            if (wallet.label === 'Universal Profiles') {
              sorted.unshift(wallet);
            } else {
              sorted.push(wallet);
            }
            return sorted;
          }, []);
          return sorted;
        },
        displayUnavailable: ['Universal Profiles'],
      });

      const chains = [
        {
          id: 1,
          token: 'LYX',
          label: 'LUKSO Mainnet',
          rpcUrl: 'https://rpc.lukso.gateway.fm/',
        },
        {
          id: 2,
          token: 'LYXt',
          label: 'LUKSO Testnet',
          rpcUrl: 'https://rpc.testnet.lukso.gateway.fm/',
        },
      ];

      const appMetadata = {
        name: 'Your App Name',
        icon: '<svg></svg>',
        logo: '<svg></svg>',
        description: 'Your app description',
        recommendedInjectedWallets: [
          {
            name: 'Universal Profiles',
            url: 'https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?hl=en',
          },
        ],
      };

      const connect = {
        iDontHaveAWalletLink: 'https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?hl=en',
        removeWhereIsMyWalletWarning: true,
      };

      const initializedOnboard = Onboard({
        wallets: [injected],
        chains,
        appMetadata,
        connect,
      });

      setOnboard(initializedOnboard);
    };

    initializeOnboard();
  }, []);

  const handleSignIn = async () => {
    if (onboard) {
      try {
        const connectedWallets = await onboard.walletSelect();
        if (connectedWallets.length > 0) {
          // Handle successful sign-in
          console.log('Successfully signed in:', connectedWallets);
          // Update the parent component with the sign-in success
          onSignInSuccess();
        } else {
          // Handle user canceled the sign-in
          console.log('User canceled sign-in');
        }
      } catch (error) {
        // Handle error during sign-in
        console.error('Error during sign-in:', error);
      }
    }
  };

  return (
    <ButtonP onClick={handleSignIn}>
      Sign In 
    </ButtonP>
  );
};

export default SignInButton;
