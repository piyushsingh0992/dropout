import darkIcon from "../../assets/icons/dark.svg";
import lightIcon from "../../assets/icons/light.svg";

import menuDark from "../../assets/icons/menuBlack.svg";
import menulight from "../../assets/icons/menuWhite.svg";

import darkHeroBackground from "../../assets/background/hero-background-dark.jpg";
import lightHeroBackground from "../../assets/background/hero-background-light.jpg";



export const light = {
  primary: "var(--primary)",
  primaryText: "var(--primary-text)",
  boldText: "var(--bold-text)",
  hightLightText: "var(--highlight-text)",
  primaryBackground: "var(--primary-background)",
  highLightBackground: "var(--highlight-background)",
  cardBackground: "var(--card-background)",
  themeButton: darkIcon,
  heroBackground: lightHeroBackground,
  toggleTo: true,
  menu: menuDark,
};
export const dark = {
  primary: "var(--dark-primary)",
  primaryText: "var(--dark-primary-text)",
  boldText: "var(--dark-bold-text)",
  hightLightText: "var(--dark-highlight-text)",
  primaryBackground: "var(--dark-primary-background)",
  highLightBackground: "var(--dark-highlight-background)",
  cardBackground: "var(--dark-card-background)",
  themeButton: lightIcon,
  heroBackground: darkHeroBackground,
  toggleTo: false,
  menu: menulight,
};
