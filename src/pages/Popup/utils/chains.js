const CHAIN_DATA = {
  MAINNET: {
    name: 'lukso-mainnet',
    chain_id: '42',
    is_testnet: false,
    db_schema_name: 'chain_lukso_mainnet',
    label: 'Mainnet',
    category_label: 'Lukso-Mainnet',
    logo_url: 'https://www.datocms-assets.com/86369/1669653891-eth.svg',
    black_logo_url:
      'https://www.datocms-assets.com/86369/1669619544-ethereum.png',
    white_logo_url:
      'https://www.datocms-assets.com/86369/1669619533-ethereum.png',
    is_appchain: false,
    appchain_of: null,
    rpc: 'https://rpc.lukso.gateway.fm/',
  },
  TESTNET: {
    name: 'lukso-testnet',
    chain_id: '4201',
    is_testnet: true,
    db_schema_name: 'chain_lukso_testnet',
    label: 'Testnet',
    category_label: 'Lukso-Testnet',
    logo_url:
      'https://www.datocms-assets.com/86369/1677870347-property-1-polygon-zkevm-icon-white.svg',
    black_logo_url:
      'https://www.datocms-assets.com/86369/1677870457-property-1-polygon-white.png',
    white_logo_url:
      'https://www.datocms-assets.com/86369/1677870452-property-1-polygon-colour.png',
    is_appchain: false,
    appchain_of: null,
    rpc: 'https://rpc.testnet.lukso.network/',
  },
};

class Chains {
  constructor() {
    this.chains = [CHAIN_DATA.MAINNET, CHAIN_DATA.TESTNET];
  }
  getAllChainsData = () => {
    return this.chains;
  };
  getChainById = (_chainId) => {
    return this.chains.find(
      (_item) => String(_item.chain_id) === String(_chainId)
    );
  };
}

const chainServices = new Chains();

export { chainServices };
