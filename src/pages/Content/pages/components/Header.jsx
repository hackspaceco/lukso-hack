// Header.js
import React, { useState } from 'react';
import ConnectButton from '../../ui_components/ConnectButton';
import SendTokens from './SendTokens';
import Logo from '../../../../assets/img/logoHome.png';

export default function Header({ isSignInSuccessful, onStateSubmit }) {
  if (!isSignInSuccessful) {
    // Sign-in Component
    return (
      <div className="ss-pb-3">
        <div style={{ textAlign: 'center', color: '#fff1f8' }}>
          <img alt="logo" src={Logo} className="logo-img my-5" />
          <p className="heading5 mb-1">LUKSO CENTER</p>
          <p className="heading7 mb-4 mx-4">
            Turn any website into a LUKSO Dapp with two lines of code. Build the
            future of LUKSO with all resources at your fingertips
          </p>
        </div>
        <div>
          <ConnectButton onConnect={onStateSubmit} />
        </div>
      </div>
    );
  }

  return (
    <div className="ss-pb-3">
      <SendTokens />
    </div>
  );
}
