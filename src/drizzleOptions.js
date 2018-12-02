import JumboArtPool from './../build/contracts/JumboArtPool.json'
import JumboGuide from './../build/contracts/JumboGuide.json'
import MyJumbo from './../build/contracts/MyJumbo.json'
import SymbolArtPool from './../build/contracts/SymbolArtPool.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545',
    },
  },
  contracts: [
    JumboArtPool,
    JumboGuide
  ],
  events: {},
  polls: {
    accounts: 1500,
  },
}

export default drizzleOptions
