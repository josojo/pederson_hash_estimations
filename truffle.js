const truffleConfig = require('@gnosis.pm/util-contracts/src/util/truffleConfig')

const DEFAULT_GAS_PRICE_GWEI = 5
const GAS_LIMIT = 6.5e6
const DEFAULT_MNEMONIC = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat'

// Get the mnemonic
const mnemonic = process.env.MNEMONIC || DEFAULT_MNEMONIC
const gasPriceGWei = process.env.GAS_PRICE_GWEI || DEFAULT_GAS_PRICE_GWEI
const gas = GAS_LIMIT

// Allow to add an aditional network (useful for docker-compose setups)
//  i.e. NETWORK='{ "name": "docker", "networkId": "99999", "url": "http://rpc:8545", "gas": "6700000", "gasPrice": "25000000000"  }'
let additionalNetwork = process.env.NETWORK ? JSON.parse(process.env.NETWORK) : null

module.exports = truffleConfig({
  mnemonic,
  gasPriceGWei,
  gas,
  additionalNetwork,
  optimizedEnabled: true,
  urlMainnet: 'https://node-green.mainnet.gnosis.pm',
  urlRinkeby: 'https://rinkeby.infura.io/' // 'http://node.rinkeby.gnosisdev.com:8545'
})