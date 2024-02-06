import { useBalance, useToken } from 'wagmi'
import { ChainId } from '@pancakeswap/sdk'
import { useState, useEffect } from 'react'


const useGetTokenData = () => {
    const [burn,setBurn] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const { data:ohmdetails }: any = useToken({
        address: "0xf7E6d65E000b53C3030cAfB7D24Fdf3D26a4ce41",
        chainId: ChainId.FON
    })
     
      const { data:ohmBurn } :any = useBalance({
        address: "0x000000000000000000000000000000000000dEaD",
        token: '0xf7E6d65E000b53C3030cAfB7D24Fdf3D26a4ce41',
        chainId: ChainId.FON
    })
    useEffect(() => {
      setBurn(ohmBurn?.formatted);
      setTotalSupply(ohmdetails?.totalSupply.formatted)
    },[ohmBurn,ohmdetails])
    return { burn, totalSupply}
    

}

export default useGetTokenData