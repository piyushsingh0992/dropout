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



export const useSideNavRoute = () => {
 

  const sideNavRouteArray = [
    {
      icon: home,
      iconWhite: homeWhite,
      routeName: "Home",
      link: "/",
    },
    {
      icon: mentor,
      iconWhite: mentorWhite,
      routeName: "All Mentors",
      link: "/choosementor",
    },
    {
      icon: search,
      iconWhite: searchWhite,
      routeName: "Search",
      link: "/search",
    },
    {
      icon: like,
      iconWhite: likeWhite,
      routeName: "Liked videoes",
      link: "/likedvideos",
    },
    {
      icon: playlist,
      iconWhite: playlistWhite,
      routeName: "Playlist",
      link: "/playlist",
    },
    {
      icon: later,
      iconWhite: laterWhite,
      routeName: "Watch Later",
      link: "/watchlater",
    },
    {
      icon: history,
      iconWhite: historyWhite,
      routeName: "History",
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
