import axios from "axios";
import home from "../assets/icons/home.svg";
import homeWhite from "../assets/icons/homeWhite.svg";

import mentor from "../assets/icons/mentor.svg";
import mentorWhite from "../assets/icons/mentorWhite.svg";

import search from "../assets/icons/search.svg";
import searchWhite from "../assets/icons/searchWhite.svg";

import like from "../assets/icons/like.svg";
import likeWhite from "../assets/icons/likeWhite.svg";

import playlist from "../assets/icons/playlist.svg";
import playlistWhite from "../assets/icons/playlistWhite.svg";

import later from "../assets/icons/later.svg";
import laterWhite from "../assets/icons/laterWhite.svg";

import history from "../assets/icons/history.svg";
import historyWhite from "../assets/icons/historyWhite.svg";

import tanay from "../assets/mentors/tanay/profile.png";
import varun from "../assets/mentors/varun/profile.png";
import shashank from "../assets/mentors/shashank/profile.png";
import abhinav from "../assets/mentors/abhinav/profile.png";
import abhinavChikara from "../assets/mentors/abhinavChikara/profile.png";
import prakhar from "../assets/mentors/prakhar/profile.png";

import tanaybanner from "../assets/mentors/tanay/banner1.png";
import varunbanner from "../assets/mentors/varun/banner1.png";
import shashankbanner from "../assets/mentors/shashank/banner1.png";
import abhinavbanner from "../assets/mentors/abhinav/banner1.png";
import abhinavChikarabanner from "../assets/mentors/abhinavChikara/banner1.png";
import prakharbanner from "../assets/mentors/prakhar/banner1.png";

import { useTheme } from "../contexts/themeContext";
import { useLanguage } from "../contexts/languageContext";

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

export function setupAuthHeaderForServiceCalls(token) {
  if (token) {
    return (axios.defaults.headers.common["auth"] = token);
  }
  delete axios.defaults.headers.common["auth"];
}

export function setupAuthExceptionHandler(loginDispatch, navigate) {
  const UNAUTHORIZED = 401;
  const UNKNOWN_ROUTE = 404;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        loginDispatch({ type: "LOGOUT" });
        navigate("login");
      }

      if (error?.response?.status === UNKNOWN_ROUTE) {
        navigate("404");
      }
      return Promise.reject(error);
    }
  );
}
