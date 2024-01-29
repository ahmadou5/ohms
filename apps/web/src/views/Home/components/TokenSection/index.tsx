import { useTranslation } from '@pancakeswap/localization'
import { useState, useEffect} from 'react'
import { formatBigNumber, formatLocalisedCompactNumber } from '@pancakeswap/utils/formatBalance'
import { Flex, Text, Button, Link, Skeleton, NextLinkFromReactRouter as RouterLink,Balance ,Heading, OpenNewIcon } from '@pancakeswap/uikit'
import { useBalance, useToken } from 'wagmi'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { ChainId } from '@pancakeswap/sdk'
import ColoredWordHeading from '../ColoredWordHeading'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'






interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
}

const TokenSection: React.FC<React.PropsWithChildren<SalesSectionProps>> = (props) => {
  const { headingText, bodyText, reverse, images } = props
  const [ totalSupply, setTotalSupply] = useState(0)
  const { t } = useTranslation()
  const  ohmdetails = true
  const ohmBurn = true
  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <CompositeImage {...images} />
        </Flex>
        
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading text={headingText} />
          <Text color="textSubtle" mb="20px">
            {bodyText}
          </Text>
          <Flex flexDirection="column"  style={{ gridArea: 'a' }}>
        <Text  mt="12px" color="textSubtle">{t('Total Supply')}</Text>
        {ohmdetails ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={totalSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        <Text mt="12px" color="textSubtle">{t('Circulating Supply')}</Text>
        {ohmBurn ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={totalSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        <Text mt="12px" color="textSubtle">{t('Burn to Date')}</Text>
        {ohmBurn ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={totalSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        <Text mt="12px" color="textSubtle">{t('Market cap')}</Text>
        
      </Flex>
      
        </Flex>
        
      </Flex>
    </Flex>
  )
}

export default TokenSection


