import darkIcon from "../../assets/icons/dark.svg";
import lightIcon from "../../assets/icons/light.svg";

import menuDark from "../../assets/icons/menuBlack.svg";
import menulight from "../../assets/icons/menuWhite.svg";

import darkbackground from "../../assets/background/background-dark.jpg";
import lightBackground from "../../assets/background/background-light.jpg";

import darkHeroBackground from "../../assets/background/hero-background-dark.jpg";
import lightHeroBackground from "../../assets/background/hero-background-light.jpg";

// importing hero images

import tanayLight from "../../assets/mentors/tanay/heroDark.png";
import tanayDark from "../../assets/mentors/tanay/hero.png";

import varunLight from "../../assets/mentors/varun/heroDark.png";
import varunDark from "../../assets/mentors/varun/hero.png";

import shashankLight from "../../assets/mentors/shashank/hero.png";
import shashankDark from "../../assets/mentors/shashank/hero.png";

import abhinavLight from "../../assets/mentors/abhinav/hero.png";
import abhinavDark from "../../assets/mentors/abhinav/hero.png";

import abhinavChikaraLight from "../../assets/mentors/abhinavChikara/heroDark.png";
import abhinavChikaraDark from "../../assets/mentors/abhinavChikara/hero.png";

import prakharLight from "../../assets/mentors/prakhar/heroDark.png";
import prakharDark from "../../assets/mentors/prakhar/hero.png";

export const light = {
  primary: "var(--primary)",
  primaryText: "var(--primary-text)",
  boldText: "var(--bold-text)",
  hightLightText: "var(--highlight-text)",
  primaryBackground: "var(--primary-background)",
  highLightBackground: "var(--highlight-background)",
  cardBackground: "var(--card-background)",
  themeButton: darkIcon,
  background: lightBackground,
  heroBackground: lightHeroBackground,
  toggleTo: true,
  tanayHeroImage: tanayLight,
  varunHeroImage: varunLight,
  shashankHeroImage: shashankLight,
  abhinavHeroImage: abhinavLight,
  abhinavChikaraHeroImage: abhinavChikaraLight,
  prakharHeroImage: prakharLight,
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
  background: darkbackground,
  heroBackground: darkHeroBackground,
  toggleTo: false,
  tanayHeroImage: tanayDark,
  varunHeroImage: varunDark,
  shashankHeroImage: shashankDark,
  abhinavHeroImage: abhinavDark,
  abhinavChikaraHeroImage: abhinavChikaraDark,
  prakharHeroImage: prakharDark,
  menu: menulight,
};
