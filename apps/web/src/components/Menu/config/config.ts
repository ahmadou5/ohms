import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
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
          href: 'https://app.eddy.finance/',
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
          href: '/farms',
          status: 'Soon',
        },
        {
          label: t('Pools'),
          href: '/pools',
          status: 'Live',
          supportChainIds: SUPPORT_ONLY_BSC,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: 'Ordinals',
      href: '/404',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
      
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: 'Quest',
      href: '/404',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
      
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: '',
      href: '/',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        
        {
          label: t('IFO'),
          href: '/ifo',
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
