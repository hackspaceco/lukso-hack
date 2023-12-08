import React, { useEffect } from 'react';

export default function Price() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ss-pb-3">
      {/* The CoinGecko Coin Price Chart Widget will be injected here */}
      <coingecko-coin-price-chart-widget
        coin-id="lukso-token-2"
        currency="usd"
        height="350"
        locale="en"
        background-color="#0f0f0f"
      ></coingecko-coin-price-chart-widget>
    </div>
  );
}
