import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade'),
  bodyText: t('Trade any Token with a Speed Of Light⚡ with the Super Charge DeFI Platform On Zeta Chain.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'OHM', alt: t('OHM token') },
      { src: 'BNB', alt: t('OHM token') },
      { src: 'ZZ', alt: t('OHM token') },
    ],
  },
})

export const inscribeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Ordinals.'),
  bodyText: t('Explore, inscribe and Trade Bitcoin Ordinals token on Bitcoin Network with Super Charge DeFi Platform Ohm.'),
  reverse: false,
  primaryButton: {
    to: '/',
    text: t('Inscribe'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'ZZZ', alt: t('OHM token') },
      { src: 'BTC', alt: t('BTC token') },
      
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('PancakeSwap makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('OHM Token.'),
  bodyText: t(
    'OHM token is at the native token of Ohm Protocol. Buy it, stake it....... ',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Buy OHM'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      
      { src: 'OHM', alt: t('OHM token') },
      
    ],
  },
})
