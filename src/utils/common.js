import home from "./images/icons/home.svg";
import homeWhite from "./images/icons/homeWhite.svg";

import mentor from "./images/icons/mentor.svg";
import mentorWhite from "./images/icons/mentorWhite.svg";

import search from "./images/icons/search.svg";
import searchWhite from "./images/icons/searchWhite.svg";

import like from "./images/icons/like.svg";
import likeWhite from "./images/icons/likeWhite.svg";

import playlist from "./images/icons/playlist.svg";
import playlistWhite from "./images/icons/playlistWhite.svg";

import later from "./images/icons/later.svg";
import laterWhite from "./images/icons/laterWhite.svg";

import history from "./images/icons/history.svg";
import historyWhite from "./images/icons/historyWhite.svg";

import tanay from "./images/mentors/tanay/profile.png";
import varun from "./images/mentors/varun/profile.png";
import shashank from "./images/mentors/shashank/profile.png";
import abhinav from "./images/mentors/abhinav/profile.png";
import abhinavChikara from "./images/mentors/abhinavChikara/profile.png";
import prakhar from "./images/mentors/prakhar/profile.png";

import tanaybanner from "./images/mentors/tanay/banner1.png";
import varunbanner from "./images/mentors/varun/banner1.png";
import shashankbanner from "./images/mentors/shashank/banner1.png";
import abhinavbanner from "./images/mentors/abhinav/banner1.png";
import abhinavChikarabanner from "./images/mentors/abhinavChikara/banner1.png";
import prakharbanner from "./images/mentors/prakhar/banner1.png";

import { useTheme } from "../contexts/themeContext/index.js";
import { useLanguage } from "../contexts/languageContext/index.js";

export const useMentorDetails = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const mentorDetails = [
    {
      name: language.mentor[0].name,
      category: language.mentor[0].mentor,
      heroImage: theme.tanayHeroImage,
      profile: tanay,
      banner: tanaybanner,
      route: "/mentor/60e409a4b9589c0595d1f1d7",
    },
    {
      name: language.mentor[1].name,
      category: language.mentor[1].mentor,
      heroImage: theme.varunHeroImage,
      profile: varun,
      banner: varunbanner,
      route: "/mentor/60e409a4b9589c0595d1f1d9",
    },

    {
      name: language.mentor[2].name,
      category: language.mentor[2].mentor,
      heroImage: theme.shashankHeroImage,
      profile: shashank,
      banner: shashankbanner,
      route: "/mentor/60e409a4b9589c0595d1f1d3",
    },
    {
      name: language.mentor[3].name,
      category: language.mentor[3].mentor,
      heroImage: theme.abhinavHeroImage,
      profile: abhinav,
      banner: abhinavbanner,
      route: "/mentor/60e409a4b9589c0595d1f1db",
    },
    {
      name: language.mentor[4].name,
      category: language.mentor[4].mentor,
      heroImage: theme.abhinavChikaraHeroImage,
      profile: abhinavChikara,
      banner: abhinavChikarabanner,
      route: "/mentor/60e409a4b9589c0595d1f1d5",
    },

    {
      name: language.mentor[5].name,
      category: language.mentor[5].mentor,
      heroImage: theme.prakharHeroImage,
      profile: prakhar,
      banner: prakharbanner,
      route: "/mentor/60e409a4b9589c0595d1f1dd",
    },
  ];
  return { mentorDetails };
};

export const useSideNavRoute = () => {
  const { language } = useLanguage();

  const sideNavRouteArray = [
    {
      icon: home,
      iconWhite: homeWhite,
      routeName: language.home,
      link: "/",
    },
    {
      icon: mentor,
      iconWhite: mentorWhite,
      routeName: language.mentors,
      link: "/choosementor",
    },
    {
      icon: search,
      iconWhite: searchWhite,
      routeName: language.search,
      link: "/search",
    },
    {
      icon: like,
      iconWhite: likeWhite,
      routeName: language.liked,
      link: "/likedvideos",
    },
    {
      icon: playlist,
      iconWhite: playlistWhite,
      routeName: language.playlist,
      link: "/playlist",
    },
    {
      icon: later,
      iconWhite: laterWhite,
      routeName: language.later,
      link: "/watchlater",
    },
    {
      icon: history,
      iconWhite: historyWhite,
      routeName: language.history,
      link: "/history",
    },
  ];
  return { sideNavRouteArray };
};
