import { Flex, Heading, Skeleton, Text, Balance } from '@pancakeswap/uikit'

import { useBalance, useToken } from 'wagmi'

import { useTranslation } from '@pancakeswap/localization'

import { usePriceCakeBusd } from 'state/farms/hooks'
import styled from 'styled-components'
import {  formatLocalisedCompactNumber } from '@pancakeswap/utils/formatBalance'

import { ChainId } from '@pancakeswap/sdk'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean; noDesktopBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}

  ${({ noDesktopBorder, theme }) =>
    noDesktopBorder &&
    `${theme.mediaQueries.md} {
           padding: 0;
           border-left: none;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'a d'
    'b e'
    'c f';

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-areas:
      'a b c'
      'd e f';
    grid-gap: 32px;
    grid-template-columns: repeat(3, auto);
  }
`

const emissionsPerBlock = 0

/**
 * User (Planet Finance) built a contract on top of our original manual CAKE pool,
 * but the contract was written in such a way that when we performed the migration from Masterchef v1 to v2, the tokens were stuck.
 * These stuck tokens are forever gone (see their medium post) and can be considered out of circulation."
 * https://planetfinanceio.medium.com/pancakeswap-works-with-planet-to-help-cake-holders-f0d253b435af
 * https://twitter.com/PancakeSwap/status/1523913527626702849
 * https://bscscan.com/tx/0xd5ffea4d9925d2f79249a4ce05efd4459ed179152ea5072a2df73cd4b9e88ba7
 */

const CakeDataRow = () => {
  const { t } = useTranslation()
  
  
  const { data:ohmdetails }:any = useToken({
    address: "0x3f2EF899eF580e6ee6202212585873E75F85C829",
    chainId: ChainId.ZETAT
  })
  
  const { data:ohmBurn }:any = useBalance({
    address: "0x000000000000000000000000000000000000dEaD",
    token: "0x3f2EF899eF580e6ee6202212585873E75F85C829",
    chainId: ChainId.ZETAT

  })
 

 

    
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(ohmdetails.totalSupply.formatted)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  

  return (
    <Grid>
      <Flex flexDirection="column" style={{ gridArea: 'a' }}>
        <Text color="textSubtle">{t('Circulating Supply')}</Text>
        {ohmdetails ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={ohmdetails.totalSupply.formatted-ohmBurn.formatted} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </Flex>
      <StyledColumn noMobileBorder style={{ gridArea: 'b' }}>
        <Text color="textSubtle">{t('Total supply')}</Text>
        {ohmdetails ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={ohmdetails.totalSupply.formatted} />
        ) : (
          <>
            
            <Skeleton height={24} width={126} my="4px" />
          </>
        )}
      </StyledColumn>
      <StyledColumn noMobileBorder style={{ gridArea: 'c' }}>
        <Text color="textSubtle">{t('Max Supply')}</Text>

        <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={3000000} />
      </StyledColumn>
      <StyledColumn noDesktopBorder style={{ gridArea: 'd' }}>
        <Text color="textSubtle">{t('Market cap')}</Text>
        {mcap?.gt(0) && mcapString ? (
          <Heading scale="lg">{t('$%marketCap%', { marketCap: mcapString })}</Heading>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      <StyledColumn style={{ gridArea: 'e' }}>
        <Text color="textSubtle">{t('Burned to date')}</Text>
        {ohmBurn ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={ohmBurn.formatted} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      <StyledColumn style={{ gridArea: 'f' }}>
        <Text color="textSubtle">{t('Current emissions')}</Text>

        <Heading scale="lg">{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })}</Heading>
      </StyledColumn>
    </Grid>
  )
}

export default CakeDataRow
