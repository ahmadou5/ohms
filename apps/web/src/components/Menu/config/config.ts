import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  TicketIcon,
  TicketFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  DropdownMenuItems,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}


const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        
        {
          label: t('Bridge'),
          href: 'https://hieswap.com/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Farms'),
          href: '/#',
          status: {
            text: 'soon',
            color: 'success'
          },
        },
        {
          label: t('Pools'),
          href: '/#',
          status: {
            text: 'soon',
            color: 'success'
          },
          supportChainIds: SUPPORT_ONLY_BSC,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    
    {
      label: 'Ordinals',
      href: '/#',
      icon: NftIcon,
      fillIcon: NftFillIcon,
      hideSubNav: false,
      items: [
        {
          label: t('Explorer'),
          href: '/#',
          status: {
            text: 'soon',
            color: 'success'
          },
        },
        {
          label: t('Inscribe'),
          href: '/#',
          status: {
            text: 'soon',
            color: 'success'
          },
          supportChainIds: SUPPORT_ONLY_BSC,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Quest'),
      href: `/airdrop-program`,
      icon: TicketIcon,
      fillIcon: TicketFillIcon,
      items: [
        {
          label: t('Overview'),
          href: `/airdrop-program`,
        },
        {
          label: t('Quest'),
          href: `/airdrop-program/quest`,
        },
      ],
    },
    {
      label: '',
      href: '/',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        
        {
          label: t('LaunchPad'),
          href: '/ifo',
          status: {
            text: 'soon',
            color: 'success'
          },
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/ifos/ifo-bunny.png',
        },
  
        {
          label: t('Blog'),
          href: 'https://medium.com/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: 'https://docs.com',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
