import { Percent } from '@pancakeswap/swap-sdk-core'
import { ERC20Token } from './entities/token'

export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  ZETAT = 7001,
  ZETA = 7000,
  FON = 201022,
  X1_TESTNET = 195,
}

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
const FACTORY_ADDRESS_FON = '0xe3bacaA390bB3E80A497592E420c5C5dDCb94a3a'
const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'

const FACTORY_ADDRESS_ZETA = '0x8C045D69b875f36c7745d4DbCe155D93b8B8c030'
const FACTORY_ADDRESS_ZETA_M = '0xe3bacaA390bB3E80A497592E420c5C5dDCb94a3a'
const FACTORY_ADDRESS_X1 = '0x0b9e480696d354Fc4103f9a8D62D2d9e2672A152'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.FON]: FACTORY_ADDRESS_FON,
  [ChainId.ZETA]: FACTORY_ADDRESS_ZETA_M,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.ZETAT]: FACTORY_ADDRESS_ZETA,
  [ChainId.X1_TESTNET]: FACTORY_ADDRESS_X1,
}
export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'
const INIT_CODE_HASH_ZETA_M = '0x513ff5a52bbab066e8e7c032436cc7962028d99e643842b2eb7c29f323b0a1f6'
const INIT_CODE_HASH_FON = '0x513ff5a52bbab066e8e7c032436cc7962028d99e643842b2eb7c29f323b0a1f6'
const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
const INIT_CODE_HASH_ZETA = '0xa94a11a63155a303fbb8e6c1f0f27a6cdafe998bc4715067a33cb99b56d8a92a'
const INIT_CODE_HASH_X1 = '0xa94a11a63155a303fbb8e6c1f0f27a6cdafe998bc4715067a33cb99b56d8a92a'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.FON]: INIT_CODE_HASH_FON,
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.ZETAT]: INIT_CODE_HASH_ZETA,
  [ChainId.ZETA]: INIT_CODE_HASH_ZETA_M,
  [ChainId.X1_TESTNET]: INIT_CODE_HASH_X1
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new ERC20Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.FON]: new ERC20Token(
    ChainId.FON,
    '0xb582fD9d0D5C3515EEB6b02fF2d6eE0b6E45E7A7',
    18,
    'WFON',
    'Wrapped FON',
    'https://fonchain.io'
  ),
}




export const WBNB = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new ERC20Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.ZETAT]: new ERC20Token(
    ChainId.ZETAT,
    '0xc1ebc1e8F49dAB830C1DD63B15513EDca5a9fD98',
    18,
    'WZETA',
    'Wrapped ZETA',
    'https://zetachain.com'
  ),
  [ChainId.ZETA]: new ERC20Token(
    ChainId.ZETA,
    '0xc1ebc1e8F49dAB830C1DD63B15513EDca5a9fD98',
    18,
    'WZETA',
    'Wrapped ZETA',
    'https://zetachain.com'
  ),
  [ChainId.X1_TESTNET]: new ERC20Token(
    ChainId.X1_TESTNET,
    '0xbec7859bc3d0603bec454f7194173e36bf2aa5c8',
    18,
    'WOKB',
    'Wrapped OKB',
    'https://okx.com'
  ),
  [ChainId.BSC_TESTNET]: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.FON]: WETH9[ChainId.FON],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.ZETAT]: WBNB[ChainId.ZETAT],
  [ChainId.ZETA]: WBNB[ChainId.ZETA]
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.X1_TESTNET]: { name: 'OKB', symbol: 'OKB', decimals: 18 },
  [ChainId.FON]: {name: 'FON', symbol: 'FON', decimals: 18},
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18,
  },
  [ChainId.ZETAT]: {
    name: 'Zeta Chain Native Token',
    symbol: 'ZETA',
    decimals: 18,
  },
  [ChainId.ZETA]: {
    name: 'Zeta Chain Native Token',
    symbol: 'ZETA',
    decimals: 18,
  },
}
