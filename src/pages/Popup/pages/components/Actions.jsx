import React, { useState } from 'react';
import { ButtonP } from '../../ui_components/Button';
import Explorer from './Explorer';
import News from './News';
import Mint from './Mint';
import Price from './Price';
import DevCenter from './DevCenter';

export default function Actions() {
  const [activeComponent, setActiveComponent] = useState(null);

  const navigateToExplorer = () => {
    setActiveComponent(<Explorer />);
  };

  const navigateToMint = () => {
    setActiveComponent(<Mint />);
  };

  const navigateToDevCenter = () => {
    setActiveComponent(<DevCenter />);
  };

  const navigateToNews = () => {
    setActiveComponent(<News />);
  };

  const navigateToPrice = () => {
    setActiveComponent(<Price />);
  };

  const navigateBackToActions = () => {
    setActiveComponent(null);
  };

  return (
    <div>
      {activeComponent ? (
        <div>
          <p
            className="mb-3"
            onClick={navigateBackToActions}
            style={{
              color: '#fff1f8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span>
              {/* Your SVG goes here */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff1f8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H6M12 5l-7 7 7 7"></path>
              </svg>
            </span>
            back
          </p>

          {activeComponent}
        </div>
      ) : (
        <div className=" ss-pb-2">
          <div>
            <ButtonP
              onClick={navigateToExplorer}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Explorer
            </ButtonP>
          </div>
          <div className="mt-3">
            <ButtonP
              onClick={navigateToMint}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
             Mint Tokens
            </ButtonP>
          </div>
          <div className="my-3">
            {/* <ButtonP
              onClick={navigateToTransfer}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Send Assets
            </ButtonP> */}
          </div>
          <div>
            <ButtonP
              onClick={navigateToNews}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              LUKSO News
            </ButtonP>
          </div>
          <div className="mt-3">
            <ButtonP
              onClick={navigateToPrice}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Live Price
            </ButtonP>
          </div>
          <div className="mt-3">
            <ButtonP
              onClick={navigateToDevCenter}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
             Access DevCenter
            </ButtonP>
          </div>
        </div>
      )}
    </div>
  );
}
