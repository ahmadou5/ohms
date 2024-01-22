import { ChainId, ERC20Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_ZETA, OHM_TESTNET } from './common'

export const zetaTestnetTokens = {
  wzeta: WBNB[ChainId.ZETAT],
  ohm: OHM_TESTNET,
  busd: BUSD_ZETA,
  
  volt: new ERC20Token(
    ChainId.ZETAT,
    '0x3f2EF899eF580e6ee6202212585873E75F85C829',
    18,
    'Volt',
    'Voltage Token',
    'https://ohmprotocol.xyz/',
  ),
  dai: new ERC20Token(ChainId.ZETAT, '0x6EF1E6877c5AeB1cBed3d426b7F4a5C7F1a2603E', 18, 'HBTC', 'Huobi BTC'),
  wbtc: new ERC20Token(ChainId.ZETAT, '0x0b9e480696d354Fc4103f9a8D62D2d9e2672A152', 8, 'WBTC', 'Wrapped BTC'),
 
  usdt: new ERC20Token(ChainId.ZETAT, '0x1d9DCBf5dBFEFf3194f85f856DCDaE107298F33d', 18, 'USDT', 'Tether USD'),
 
}
