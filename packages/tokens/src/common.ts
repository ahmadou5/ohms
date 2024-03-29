import { ChainId, ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)
export const OHM_TESTNET = new ERC20Token(
  ChainId.ZETAT,
  '0xB289e7b820F9b85e28156232085da7307795934f',
  18,
  'Ohm',
  'Ohm Protocol Token',
  'https://ohmprotocol.xyz/',
)

export const OHM_FON = new ERC20Token(
  ChainId.FON,
  '0xf7E6d65E000b53C3030cAfB7D24Fdf3D26a4ce41',
  18,
  'Ohm',
  'Ohm Protocol Token',
  'https://ohmprotocol.xyz/',
)

export const OHM_X1 = new ERC20Token(
  ChainId.X1_TESTNET,
  '0x9d8b9dbac2B6F21bC4bd6b05A0De4ccdBf219747',
  18,
  'Ohm',
  'Ohm Protocol Token',
  'https://ohmprotocol.xyz/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ZETA = new ERC20Token(
  ChainId.ZETAT,
  '0x1d9DCBf5dBFEFf3194f85f856DCDaE107298F33d',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)
export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_X1 = new ERC20Token(
  ChainId.X1_TESTNET,
  '0xded3ac2a172a21a729063c39da55c030ec4a8cc9',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ZETA = new ERC20Token(
  ChainId.ZETAT,
  '0x6B9e34b56504B33468dACbb6D37b79C1b4D3B70E',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_FON = new ERC20Token(
  ChainId.FON,
  '0x9a9eD7440a3850c4D7240c9FcA8B7C96802615f0',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.ZETAT]: BUSD_ZETA,
  [ChainId.ZETA]: BUSD_ZETA,
  [ChainId.FON]: BUSD_ZETA,
  [ChainId.X1_TESTNET]: BUSD_X1
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.ZETAT]: OHM_TESTNET,
  [ChainId.ZETA]: BUSD_ZETA,
  [ChainId.FON]: OHM_FON,
  [ChainId.X1_TESTNET]: OHM_X1
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  [ChainId.ZETAT]: USDT_ZETA
}

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const WBTC_ZETA = new ERC20Token(
  ChainId.ZETAT,
  '0x0b9e480696d354Fc4103f9a8D62D2d9e2672A152',
  8,
  'WBTC',
  'Wrapped BTC',
)
