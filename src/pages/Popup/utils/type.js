const TYPE_DATA = {
  TOKEN: {
    label: 'Token',
  },
  NFT: {
    label: 'NFT',
  },
};

class Tokens {
  constructor() {
    this.tokens = [TYPE_DATA.TOKEN, TYPE_DATA.NFT];
  }
  getAllTokensData = () => {
    return this.tokens;
  };

}

const typeServices = new Tokens();

export { typeServices };
