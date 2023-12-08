import React, { useState, useEffect } from 'react';
import { ButtonP } from '../../ui_components/Button';
import Input from '../../ui_components/Input';
import TypeDropdown from '../../ui_components/TypeDropdown';
import { useGlobalContext } from '../../context/globalContext';

const MintToken = () => {
  const { state, updatePageDetail, updateError } = useGlobalContext();

  const [chain, setChain] = useState(state.searchForm.chain);
  const [amount, setAmount] = useState(state.searchForm.search);
  const [search, setSearch] = useState(state.searchForm.search);

  // Additional input fields
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenImage, setTokenImage] = useState('');
  const [tokenDescription, setTokenDescription] = useState('');
  const [tokenLinks, setTokenLinks] = useState('');

  const onStateSubmit = () => {
    // You can use the values of additional fields as needed
    const mintingDetails = {
      chain,
      search,
      amount,
      tokenName,
      tokenSymbol,
      tokenImage,
      tokenDescription,
      tokenLinks,
    };

    updatePageDetail(mintingDetails);
  };

  useEffect(() => {
    setSearch(state.searchForm.search);
  }, [state.searchForm.search]);

  return (
    <div className="ss-pb-2">
      <p className="heading6 mb-2" style={{ color: '#ff005b' }}>
        Mint Tokens
      </p>
      <div className="homeInput promptSearchHeader">
        <TypeDropdown
          value={chain.name}
          onChange={(item) => {
            updateError('');
            setChain(item);
          }}
        />
      </div>

      {/* Additional input fields for minting */}
      <div className="homeInput promptSearchHeader">
        <Input
          value={tokenName}
          placeholder="Token Name"
          onChange={(e) => setTokenName(e.target.value)}
        />
      </div>
      <div className="homeInput promptSearchHeader">
        <Input
          value={tokenSymbol}
          placeholder="Token Symbol"
          onChange={(e) => setTokenSymbol(e.target.value)}
        />
      </div>
      <div className="homeInput promptSearchHeader">
        <Input type="file" onChange={(e) => setTokenImage(e.target.files[0])} />
      </div>
      <div className="homeInput promptSearchHeader">
        <Input
          value={tokenDescription}
          placeholder="Token Description"
          onChange={(e) => setTokenDescription(e.target.value)}
        />
      </div>
      <div className="homeInput promptSearchHeader">
        <Input
          value={tokenLinks}
          placeholder="Token Links"
          onChange={(e) => setTokenLinks(e.target.value)}
        />
      </div>

      <div>
        <ButtonP
          onClick={onStateSubmit}
          style={{ backgroundColor: '#ff005b', color: 'white' }}
        >
          {state.apiLoader ? <>Minting..</> : <>Mint</>}
        </ButtonP>
      </div>
    </div>
  );
};

export default MintToken;
