import React, { useState } from 'react';
import { ButtonP } from '../../ui_components/Button';
import Input from '../../ui_components/Input';
import { useGlobalContext, } from '../../context/globalContext';
import { InjectMaster } from '../../InjectMaster';



export default function DevCenter() {
    const { updateStep } = useGlobalContext();
  const [activeComponent, setActiveComponent] = useState(null);
  const [passkey, setPasskey] = useState('');
  const [isPasskeyRequired, setIsPasskeyRequired] = useState(false);

 

  const navigateToInjected = () => {
    setIsPasskeyRequired(true);
  };

  const navigateToMint = () => {
    setIsPasskeyRequired(true);
  };

//   const navigateBackToActions = () => {
//     setActiveComponent(null);
//     setPasskey('');
//   };

  const checkPasskey = () => {
    // Replace 'your-passkey' with the actual correct passkey
    if (passkey === 'buildup2') {
      setActiveComponent(
        isPasskeyRequired ? <InjectMaster /> : <InjectMaster />
      );
      setIsPasskeyRequired(false);
      updateStep('dev');

    } else {
      // Handle incorrect passkey
      alert('Incorrect passkey. Please try again.');
    }
  };

  return (
    
    <div>
      {activeComponent ? (
        <div>{activeComponent}</div>
      ) : (
        <div className=" ss-pb-2">
          {isPasskeyRequired ? (
            <div>
              <p className="heading6 mb-2" style={{ color: '#ff005b' }}>
                Enter Passkey
              </p>

              <p className="heading7 mb-2" style={{ color: '#fff1f8' }}>
                Register for{' '}
                <a
                  href="https://app.buidlbox.io/lukso/build-up-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ff005b', textDecoration: 'underline' }}
                >
                  Hackathon Here
                </a>{' '}
                to obtain a passkey.
              </p>
              <div className="homeInput mb-2 promptSearchHeader">
                <Input
                  type="password"
                  value={passkey}
                  placeholder="Enter Passkey"
                  onChange={(e) => setPasskey(e.target.value)}
                />
              </div>
              <ButtonP
                onClick={checkPasskey}
                style={{ backgroundColor: '#ff005b', color: 'white' }}
              >
                Submit Passkey
              </ButtonP>
            </div>
          ) : (
            <div>
              <p className="heading6 mb-2" style={{ color: '#ff005b' }}>
                Select Event
              </p>
              <div>
                <ButtonP
                  onClick={navigateToInjected}
                  style={{ backgroundColor: '#fff1f8', color: 'black' }}
                >
                  BUILDUP 2 Hackathon
                </ButtonP>
              </div>
              <div className="mt-3">
                <ButtonP
                  onClick={navigateToMint}
                  style={{ backgroundColor: '#fff1f8', color: 'black' }}
                >
                  ETHWARSAW Hackathon
                </ButtonP>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  
  );
}
