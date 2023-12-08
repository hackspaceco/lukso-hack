import React, { useState, useEffect } from 'react';
import Input from '../../ui_components/Input';
import { ButtonP } from '../../ui_components/Button';
import { useGlobalContext } from '../../context/globalContext';
import ChainDropdown from '../../ui_components/ChainDropdown';
import TransactionPage from './TransactionDetail'; // Import the TransactionPage component

export default function Explorer() {
  const { state, updateAPILoader, updateError } = useGlobalContext();

  const [chain, setChain] = useState(state.searchForm.chain);
  const [search, setSearch] = useState(state.searchForm.search);
  const [fetchedData, setFetchedData] = useState(null);

  const onStateSubmit = async () => {
    updateError('');

    try {
      const apiUrl = getApiUrl(chain, search);
      // Set loader state to true using the correct function
      updateAPILoader(true);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      setFetchedData(data);
      console.log(data);
      alert('Data fetched successfully!');
    } catch (error) {
      updateError(`Error: ${error.message}`);
      alert(`Error: ${error.message}`);
    } finally {
      // Set loader state back to false using the correct function
      updateAPILoader(false);
    }
  };

  useEffect(() => {
    setSearch(state.searchForm.search);
  }, [state.searchForm.search]);

  const getApiUrl = (selectedChain, search) => {
    const chainApiUrls = {
      'lukso-mainnet': 'https://api.explorer.execution.mainnet.lukso.network/api/v2/transactions',
      'lukso-testnet': 'https://api.explorer.execution.testnet.lukso.network/api/v2/transactions',
    };

    const apiUrl = chainApiUrls[selectedChain.name];

    return search ? `${apiUrl}/${search}` : apiUrl;
  };

  return (
    <div className="ss-pb-3">
     { !fetchedData ? <p className="heading6 mb-2" style={{ color: '#ff005b' }}>
        Explorer
      </p> : <p className="heading6 mb-2" style={{ color: '#ff005b' }}>
        Transaction details
      </p>}
      {!fetchedData && (
        <>
          <div className="homeSearchHeader">
            <div className="homeInput">
              <Input
                value={search}
                placeholder="Transaction Hash"
                onChange={(e) => {
                  updateError('');
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div>
              <ChainDropdown
                value={chain.name}
                onChange={(item) => {
                  updateError('');
                  setChain(item);
                }}
              />
            </div>
          </div>
          <div>
            <ButtonP
              onClick={onStateSubmit}
              style={{ backgroundColor: '#ff005b', color: 'white' }}
            >
              {/* Update the following line with the correct loader state */}
              {state.apiLoader ? <>Loading...</> : <>Search</>}
            </ButtonP>
          </div>
        </>
      )}
      {/* Render the TransactionPage component with fetched data */}
      {fetchedData && (
        <div className="ss-pt-2">
          <TransactionPage {...fetchedData} />
        </div>
      )}
    </div>
  );
}
