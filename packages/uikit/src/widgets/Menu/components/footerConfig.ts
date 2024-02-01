import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      
     
      {
        label: t("Community"),
        href: "https://t.me/ohmprotocol",
      },
      
    ],
  },
  
  {
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/ohmprotocol",
      },
      
      {
        label: t("Careers"),
        href: "https://twitter.com/@ohmprotocol",
      },
    ],
  },
];
