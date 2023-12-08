// WelcomePage.js
import React, { useState } from 'react';
import { ButtonP } from '../../ui_components/Button';
import Input from '../../ui_components/Input';
import { useGlobalContext } from '../../context/globalContext';
import ChainDropdown from '../../ui_components/ChainDropdown';
import { useEffect } from 'react';

const SendTokens = () => {
  const { state, updatePageDetail, updateError } = useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [amount, setAmount] = React.useState(state.searchForm.search);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const onStateSubmit = () => {
    updatePageDetail(search, chain, amount);
  };

  useEffect(() => {
    setSearch(state.searchForm.search);
  }, [state.searchForm.search]);

  return (
    <div className="ss-pb-2">
      <p className="heading6 mb-2" style={{ color: '#ff005b' }}>
        Transfer Tokens
      </p>
      <div className="homeInput promptSearchHeader">
        <Input
          value={search}
          placeholder="Enter receipient Address or UP"
          onChange={(e) => {
            updateError('');
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="homeInput transferHeader">
        <Input
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => {
            updateError('');
            setAmount(e.target.value);
          }}
        />
      </div>

      <div>
        <ButtonP
          onClick={onStateSubmit}
          style={{ backgroundColor: '#ff005b', color: 'white' }}
        >
          {state.apiLoader ? <>Processing..</> : <>Send</>}
        </ButtonP>
      </div>
    </div>
  );
};

export default SendTokens;
