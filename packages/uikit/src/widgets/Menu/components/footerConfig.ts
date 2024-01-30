import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      
      {
        label: t("Blog"),
        href: "https://medium.com/pancakeswap",
      },
      {
        label: t("Community"),
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      
    ],
  },
  
  {
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      
      {
        label: t("Careers"),
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];
