import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Ohm-Protocol',
  defaultTitle: 'Ohm-Protocol',
  description:
    'A MultiChain Decentralised Exchange.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: 'OhmProtocol - A light weight DeFi exchange on ZetaChain',
    description:
      'Trade with a speed of light with the most secure DeFi exchange on ZetaChain.',
    images: [{ url: 'https://ohmprotocol.xyz/logo.png' }],
  },
}
