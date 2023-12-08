// Updated InjectHome.js
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import { useMemo } from 'react';
import Transaction from './pages/Transaction';
import { GlobalContext, useGlobalReducer } from './context/globalContext';
import Wallet from './pages/Wallet';
import Block from './pages/Block';
import Layout from './pages/components/Layout';
import './Popup.css';

import Title from './ui_components/Title';
import Header from './pages/components/Header';
import Actions from './pages/components/Actions';
import { chainServices } from './utils';
import { ButtonP } from './ui_components/Button';
import { InjectMaster } from './InjectMaster';
import ConnectButton from './ui_components/ConnectButton';

export const allPages = {
  home: 'home',
  dev: 'dev',
  welcome: 'welcome',
  transaction: 'transaction',
  wallet: 'wallet',
  block: 'block',
};

function InjectHome() {
  const globalState = useGlobalReducer();
  const [arrowClicked, setArrowClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [isSignInSuccessful, setIsSignInSuccessful] = useState(false);

  const steps = useMemo(() => {
    switch (globalState.state.steps) {
      case allPages.home:
        return <Home />;
      case allPages.transaction:
        return <Transaction />;
      case allPages.wallet:
        return <Wallet />;
      case allPages.block:
        return <Block />;
      default:
        return <Home />;
    }
  }, [globalState.state.steps]);

  useEffect(() => {
    window.addEventListener(
      'lukso-center-tx',
      function (event) {
        const { detail } = event;
        globalState.updatePageDetail(
          detail.hash,
          chainServices.getChainById(detail.chainId)
        );
      },
      false
    );
  }, []);

  const isInjectedMasterActive = globalState.state.steps === allPages.dev;

  if (isInjectedMasterActive) {
    return <InjectMaster />;
  }

  const onStateSubmit = () => {
    setIsSignInSuccessful(true);
    setTimeout(() => {
      onSignOut();
    }, 3 * 60 * 1000);
  };

  const onSignOut = () => {
    setIsSignInSuccessful(false);
  };

  return (
    <GlobalContext.Provider value={globalState}>
      <div className="homePage">
        <Layout>
          <div className={globalState.state.accordion ? 'ss-pb-4' : ''}>
            <div className="d-flex cursorPointer ss-pb-2">
              <div className="flex-grow-1">
                {!isInjectedMasterActive && <Title />}
              </div>
              <div className="flex-container">
                {/* Sign Out Button */}
                <div className="flex-item">
                  {isSignInSuccessful && (
                    <ButtonP
                      onClick={onSignOut}
                      style={{ backgroundColor: '#ff005b', color: 'white' }}
                      className="menu-button heading7"
                    >
                      Sign Out
                    </ButtonP>
                    // <ConnectButton onClick={onSignOut} />
                  )}
                </div>

                <div className="flex-item">
                  {isSignInSuccessful && (
                    <ButtonP
                      style={{ backgroundColor: '#ff005b', color: 'white' }}
                      onClick={() => {
                        setMenuClicked((prevMenuClicked) => !prevMenuClicked);
                        setArrowClicked(
                          (prevArrowClicked) => !prevArrowClicked
                        );
                      }}
                      className="menu-button heading7"
                    >
                      Actions
                      <div style={{ margin: '0 3px', position: 'relative' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke="white"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </ButtonP>
                  )}
                </div>

                <div className="flex-item">
                  <div
                    onClick={() => {
                      setArrowClicked(true);
                      globalState.updateAccordion(!globalState.state.accordion);
                      setMenuClicked(false);
                    }}
                    className={`${
                      globalState.state.accordion ? 'rotateImage' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5.25 8.625L12 15.375L18.75 8.625"
                        stroke="white"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {!isInjectedMasterActive &&
              globalState.state.accordion &&
              menuClicked && (
                <div className="ss-pb-2">
                  <Actions type="menu" />
                </div>
              )}
            {!isInjectedMasterActive &&
              globalState.state.accordion &&
              arrowClicked && (
                <>
                  <div className="ss-pb-2">
                    <Header
                      type="arrow"
                      isSignInSuccessful={isSignInSuccessful}
                      onStateSubmit={onStateSubmit}
                    />
                  </div>
                  {steps}
                </>
              )}
          </div>
        </Layout>
      </div>
    </GlobalContext.Provider>
  );
}

export { InjectHome };
