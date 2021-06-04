import darkIcon from "../../utils/images/icons/dark.svg";
import lightIcon from "../../utils/images/icons/light.svg";

import menuDark from "../../utils/images/icons/menuBlack.svg";
import menulight from "../../utils/images/icons/menuWhite.svg";

import darkbackground from "../../utils/images/background/background-dark.jpg";
import lightBackground from "../../utils/images/background/background-light.jpg";

import darkHeroBackground from "../../utils/images/background/hero-background-dark.jpg";
import lightHeroBackground from "../../utils/images/background/hero-background-light.jpg";

// importing hero images

import tanayLight from "../../utils/images/mentors/tanay/heroDark.png";
import tanayDark from "../../utils/images/mentors/tanay/hero.png";

import varunLight from "../../utils/images/mentors/varun/heroDark.png";
import varunDark from "../../utils/images/mentors/varun/hero.png";

import shashankLight from "../../utils/images/mentors/shashank/hero.png";
import shashankDark from "../../utils/images/mentors/shashank/hero.png";

import abhinavLight from "../../utils/images/mentors/abhinav/hero.png";
import abhinavDark from "../../utils/images/mentors/abhinav/hero.png";

import abhinavChikaraLight from "../../utils/images/mentors/abhinavChikara/heroDark.png";
import abhinavChikaraDark from "../../utils/images/mentors/abhinavChikara/hero.png";

import prakharLight from "../../utils/images/mentors/prakhar/heroDark.png";
import prakharDark from "../../utils/images/mentors/prakhar/hero.png";

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
