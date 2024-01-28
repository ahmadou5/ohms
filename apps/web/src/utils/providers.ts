import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = "https://zetachain-athens-evm.blockpi.network/v1/rpc/public"

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
