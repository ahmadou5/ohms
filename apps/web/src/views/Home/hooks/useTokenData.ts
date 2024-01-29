import { useBalance, useToken } from 'wagmi'
import { ChainId } from '@pancakeswap/sdk'
import { useState, useEffect } from 'react'


const useGetTokenData = () => {
    const [burn,setBurn] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const { data:ohmdetails }: any = useToken({
        address: "0xB289e7b820F9b85e28156232085da7307795934f",
        chainId: ChainId.ZETAT
    })
     
      const { data:ohmBurn } :any = useBalance({
        address: "0x000000000000000000000000000000000000dEaD",
        token: '0xB289e7b820F9b85e28156232085da7307795934f',
        chainId: ChainId.ZETAT
    })
    useEffect(() => {
      setBurn(ohmBurn?.formatted);
      setTotalSupply(ohmdetails?.totalSupply.formatted)
    },[ohmBurn,ohmdetails])
    return { burn, totalSupply}
    

}

export default useGetTokenData