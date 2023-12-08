import React, { useState } from 'react';
import { ButtonP } from '../../ui_components/Button';
import Explorer from './Explorer';
import Tokens from './Tokens';
import Links from './Links';
import Documentation from './Documentation';
import { useGlobalContext, } from '../../context/globalContext';

export default function Actions() {
  const { updateStep } = useGlobalContext();
  const [activeComponent, setActiveComponent] = useState(null);

  const navigateToExplorer = () => {
    setActiveComponent(<Explorer />);
  };

  const navigateToTokens = () => {
    setActiveComponent(<Tokens />);
  };

  const navigateToLinks = () => {
    setActiveComponent(<Links />);
  };

  const navigateToDocumentation = () => {
    setActiveComponent(<Documentation />);
  };

  const navigateBackToActions = () => {
    setActiveComponent(null);
  };

  const handleExit = () => {
    updateStep('welcome');
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
            {/* <ButtonP
              onClick={navigateToAnnouncement}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Announcements
            </ButtonP> */}
          </div>
          <div className="mt-3">
            <ButtonP
              onClick={navigateToExplorer}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
             Explorer
            </ButtonP>
          </div>
          <div className="my-3">
            <ButtonP
              onClick={navigateToTokens}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Tokens
            </ButtonP>
          </div>
          <div>
            <ButtonP
              onClick={navigateToLinks}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Links
            </ButtonP>
          </div>
          <div className="mt-3">
            <ButtonP
              onClick={navigateToDocumentation}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Resources
            </ButtonP>
          </div>
          <div className="mt-3">
            <ButtonP
              onClick={handleExit}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              Exit DevCenter
            </ButtonP>
          </div>
        </div>
      )}
    </div>
  );
}
