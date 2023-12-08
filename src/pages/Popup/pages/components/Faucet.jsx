import React from 'react';

export default function Faucet() {
  return (
    <div className="ss-pb-3" style={{ width: '100%' }}>
      <iframe
        title="Lukso Faucet"
        src="https://faucet.testnet.lukso.network/" // Replace with the actual URL of the Lukso faucet
        width="100%"
        height="400px"
        frameBorder="0"
      />
    </div>
  );
}
