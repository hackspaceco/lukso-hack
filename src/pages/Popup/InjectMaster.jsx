import React, { useEffect } from 'react';
import Home from './pages/Home';
import { useMemo } from 'react';
import Transaction from './pages/Transaction';
import { GlobalContext, useGlobalReducer } from './context/globalContext';
import Wallet from './pages/Wallet';
import Block from './pages/Block';
import Layout from './pages/components/Layout';
import './Popup.css';

import Title from './ui_components/Title';
import HeaderDev from './pages/components/HeaderDev';
import ActionsDev from './pages/components/ActionsDev';
import { chainServices } from './utils';
import { useState } from 'react';
import { ButtonP } from './ui_components/Button';
import Announcements from './pages/components/Announcements';
import { InjectHome } from './InjectHome';

export const allPages = {
  home: 'home',
  dev: 'dev',
  welcome: 'welcome',
  transaction: 'transaction',
  wallet: 'wallet',
  block: 'block',
};

function InjectMaster() {
  const globalState = useGlobalReducer();
  const [arrowClicked, setArrowClicked] = useState(false);
  const [alertClicked, setAlertClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

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

  const isInjectedHomeActive = globalState.state.steps === allPages.welcome;

  // Conditionally render the entire content based on whether InjectMaster is active or not
  if (isInjectedHomeActive) {
    return <InjectHome />;
  }

  return (
    <GlobalContext.Provider value={globalState}>
      <div className="homePage">
        <Layout>
          <div className={globalState.state.accordion ? 'ss-pb-4' : ''}>
            <div className="d-flex cursorPointer ss-pb-2">
              <div className="flex-grow-1">
                <Title />
              </div>
              <div className="flex-container">
                {globalState.state.accordion && (
                  <>
                    {/* Notification Section */}
                    <div className="flex-item">
                      <div
                        onClick={() => {
                          setAlertClicked(
                            (prevMenuClicked) => !prevMenuClicked
                          );
                          setArrowClicked(
                            (prevArrowClicked) => !prevArrowClicked
                          );
                          setMenuClicked(false);
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          id="_24x24_On_Light_Messages-Alert"
                          data-name="24x24/On Light/Messages-Alert"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            id="view-box"
                            width="24"
                            height="24"
                            fill="none"
                          />
                          <path
                            id="Shape"
                            d="M10.751,19.5a9.66,9.66,0,0,1-4.266-.981,9.889,9.889,0,0,1-4.876.981c-.279,0-.578-.006-.887-.018a.74.74,0,0,1-.65-.432.738.738,0,0,1,.085-.775,11.191,11.191,0,0,0,2.072-3.787A9.754,9.754,0,0,1,12.682.192a5.478,5.478,0,0,0-.676,1.4A8.252,8.252,0,0,0,3.668,13.983a.75.75,0,0,1,.092.535A10.189,10.189,0,0,1,2.2,17.99a7.2,7.2,0,0,0,3.816-.947.746.746,0,0,1,.431-.136A.755.755,0,0,1,6.808,17a8.254,8.254,0,0,0,12.1-8.5,5.477,5.477,0,0,0,1.4-.676A9.755,9.755,0,0,1,10.751,19.5Zm3-7h-7a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Zm-2-4h-5a.75.75,0,1,1,0-1.5h5a.75.75,0,0,1,0,1.5Zm6.612-1.931h0a8.34,8.34,0,0,0-4.43-4.43,3.527,3.527,0,0,1,.781-1.3,9.773,9.773,0,0,1,4.946,4.946,3.527,3.527,0,0,1-1.3.781Z"
                            transform="translate(1.249 2.25)"
                            fill="#fff1f8"
                          />
                          <path
                            id="Shape-2"
                            data-name="Shape"
                            d="M3.5,7A3.5,3.5,0,1,1,7,3.5,3.5,3.5,0,0,1,3.5,7Z"
                            transform="translate(15 2)"
                            fill="#ff6359"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Action Buttons */}

                    <div className="flex-item">
                      <ButtonP
                        style={{ backgroundColor: '#ff005b', color: 'white' }}
                        onClick={() => {
                          setMenuClicked((prevMenuClicked) => !prevMenuClicked);
                          setArrowClicked(
                            (prevArrowClicked) => !prevArrowClicked
                          );
                          setAlertClicked(false)
                         
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
                    </div>
                  </>
                )}

                <div className="flex-item">
                  <div
                    onClick={() => {
                      setArrowClicked(true);
                      globalState.updateAccordion(!globalState.state.accordion);
                      setMenuClicked(false);
                      setAlertClicked(false);
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
            {globalState.state.accordion && alertClicked && (
              <div className="ss-pb-2">
                <Announcements type="menu" />
              </div>
            )}
            {globalState.state.accordion && menuClicked && !alertClicked && (
              <div className="ss-pb-2">
                <ActionsDev type="menu" />
              </div>
            )}
            {globalState.state.accordion && arrowClicked && !alertClicked && !menuClicked && (
              <>
                <div className="ss-pb-2">
                  <HeaderDev type="arrow" />
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

export { InjectMaster };
