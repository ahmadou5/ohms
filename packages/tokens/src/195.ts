import { ChainId, ERC20Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_X1,  } from './common'

export const X1TestnetTokens = {
  woxb: WBNB[ChainId.X1_TESTNET],
  
  busd: BUSD_X1,
  wbtc: new ERC20Token(ChainId.ZETAT, '0x567a3238b3b380f96a90dff5da8429e089062329', 8, 'WBTC', 'Wrapped BTC'),
 
}
