import { BinanceWalletConnector } from '@pancakeswap/wagmi/connectors/binanceWallet'
import { BloctoConnector } from '@pancakeswap/wagmi/connectors/blocto'
import { TrustWalletConnector } from '@pancakeswap/wagmi/connectors/trustWallet'
import { bsc, bscTestnet, goerli, mainnet } from 'wagmi/chains'
import { configureChains, Chain, createClient } from 'wagmi'
import memoize from 'lodash/memoize'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { SafeConnector } from './safeConnector'



const FonSmartChain:Chain = {
  id: 201022,
  name: "Fon Smart Chain",
  network: "FON",
  nativeCurrency: { name: "FON", symbol: "FON", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["hhttps://fsc-dataseed1.fonscan.io"],
      webSocket: ["wss://fsc-dataseed1.fonscan.io"]
    },
    infura: {
      http: ["https://fsc-dataseed1.fonscan.io"],
      webSocket: ["wss://fsc-dataseed1.fonscan.io"]
    },
    default: {
      http: ["https://fsc-dataseed1.fonscan.io"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Fonscan", url: "https://fonscan.io" },
    default: { name: "Fonscan", url: "https://fonscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xB289e7b820F9b85e28156232085da7307795934f",
      blockCreated: 12282180
    }
  }
};

const PowerChain:Chain = {
  id: 13,
  name: "Power Chain",
  network: "PWR",
  nativeCurrency: { name: "FON", symbol: "FON", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["hhttps://fsc-dataseed1.fonscan.io"],
      webSocket: ["wss://fsc-dataseed1.fonscan.io"]
    },
    infura: {
      http: ["https://fsc-dataseed1.fonscan.io"],
      webSocket: ["wss://fsc-dataseed1.fonscan.io"]
    },
    default: {
      http: ["https://fsc-dataseed1.fonscan.io"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Fonscan", url: "https://fonscan.io" },
    default: { name: "Fonscan", url: "https://fonscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xB289e7b820F9b85e28156232085da7307795934f",
      blockCreated: 12282180
    }
  },
  testnet: false
};


const ZetaChainTestnet:Chain = {
  id: 7001,
  name: "ZetaChain athen",
  network: "athen3",
  nativeCurrency: { name: "tZeta", symbol: "tZeta", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
      webSocket: ["wss://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    },
    infura: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
      webSocket: ["wss://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    },
    default: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    }
  },
  blockExplorers: {
    etherscan: { name: "ZetaScan", url: "https://explorer.zetachain.com/" },
    default: { name: "ZetaScan", url: "https://explorer.zetachain.com/" }
  },
  contracts: {
    multicall3: {
      address: "0xFC513615C18E4539CCa16DaF7c3A97CE9F4E9DE6",
      blockCreated: 3486373
    }
  },
  testnet: false,
};

const OKXTestnet:Chain = {
  id: 195,
  name: "X1 Testnet",
  network: "X1",
  nativeCurrency: { name: "OKB", symbol: "OKB", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://x1testrpc.okx.com"],
      webSocket: ["wss://x1testrpc.okx.com"]
    },
    infura: {
      http: ["https://x1testrpc.okx.com"],
      webSocket: ["wss://x1testrpc.okx.com"]
    },
    default: {
      http: ["https://x1testrpc.okx.com"]
    }
  },
  blockExplorers: {
    etherscan: { name: "X1Scan", url: "https://www.okx.com/explorer/x1-test/" },
    default: { name: "X1Scan", url: "https://www.okx.com/explorer/x1-test/" }
  },
  contracts: {
    multicall3: {
      address: "0x967e19C9a147d7EDB5cc3Bbdd91bE77A15D237E2",
      blockCreated: 8853414
    }
  },
  testnet: false,
};

const ZetaChain:Chain = {
  id: 7000,
  name: "ZetaChain",
  network: "Zeta",
  nativeCurrency: { name: "Zeta", symbol: "Zeta", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
      webSocket: ["wss://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    },
    infura: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
      webSocket: ["wss://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    },
    default: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    }
  },
  blockExplorers: {
    etherscan: { name: "ZetaScan", url: "https://explorer.zetachain.com/" },
    default: { name: "ZetaScan", url: "https://explorer.zetachain.com/" }
  },
  contracts: {
    multicall3: {
      address: "0x3f585532dc60f9da788119bee49e7d52979b63fa",
      blockCreated: 3187417
    }
  },
  testnet: true,
};

const CHAINS = [ FonSmartChain, OKXTestnet, ZetaChainTestnet ]
const getNodeRealUrl = (networkName: string) => {
  let host = null

  switch (networkName) {
    case 'homestead':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
        host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`
      }
      break
    case 'goerli':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
        host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`
      }
      break
    default:
      host = null
  }

  if (!host) {
    return null
  }

  const url = `https://${host}`
  return {
    http: url,
    webSocket: url.replace(/^http/i, 'wss').replace('.nodereal.io/v1', '.nodereal.io/ws/v1'),
  }
}

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (chain.id === ZetaChain.id) {
        return { http: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public" }
      }
      if (process.env.NODE_ENV === 'test' && chain.id === mainnet.id) {
        return { http: 'https://cloudflare-eth.com' }
      }

      return getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default.http[0] }
    },
  }),
])

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'PancakeSwap',
    appLogoUrl: 'https://pancakeswap.com/logo.png',
  },
})

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
})

export const walletConnectNoQrCodeConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: false,
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

const bloctoConnector = new BloctoConnector({
  chains,
  options: {
    defaultChainId: 56,
    appId: 'e2f2f0cd-3ceb-4dec-b293-bb555f2ed5af',
  },
})

const ledgerConnector = new LedgerConnector({
  chains,
})

export const bscConnector = new BinanceWalletConnector({ chains })

export const trustWalletConnector = new TrustWalletConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    new SafeConnector({ chains }),
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    bscConnector,
    bloctoConnector,
    ledgerConnector,
    trustWalletConnector,
  ],
})

export const CHAIN_IDS = chains.map((c) => c.id)

export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(chainId))
export const isChainTestnet = memoize((chainId: number) => chains.find((c) => c.id === chainId)?.testnet)
