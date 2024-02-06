import styled from 'styled-components'
import { Flex, Text, Button, PageSection } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const StyledBannerSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }

  // Adjust the background styles
  background: linear-gradient(
    142.67deg,
    #9bedff 10.8%,
    rgba(214, 201, 255, 0.4) 41.55%,
    rgba(214, 201, 255, 0.4) 81.99%
  );

  [data-theme='dark'] & {
    background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
  }
`

const Founders = () => {
  const { t } = useTranslation()

  return (
    <StyledBannerSection
      innerProps={{ style: { margin: '0', width: '100%', minHeight: '100vh' } }}
      containerProps={{
        id: 'home-1',
      }}
      index={2}
      hasCurvedDivider={false}
    >
      <Flex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex
          m={['22px 0 0 0 0', '22px 0 0 0 0', '22px 0 0 0 0', '0 0 0 48px']}
          maxWidth={['697px']}
          alignSelf="center"
          flexDirection="column"
        >
          <Text fontSize={['38px', '38px', '64px']} lineHeight="110%" bold color="secondary">
            {t('Founders Program Coming Soon')}
          </Text>
          <Text fontSize={['16px', '24px']} lineHeight="110%" bold m="32px 0">
            {t('Stay tuned for updates on our Founders Program. We are working hard to bring it to you soon!')}
          </Text>
          <Button disabled>{t('Coming Soon')}</Button>
        </Flex>
      </Flex>
    </StyledBannerSection>
  )
}

export default Founders
