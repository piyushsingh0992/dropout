const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const LikedVideo = require("../models/likedVideo.model.js");
const Watchlater = require("../models/watchLater.model.js");
const History = require("../models/history.model.js");
const Notes = require("../models/notes.model.js");
const Subscribe = require("../models/subscribe.model.js");
const Mentor = require("../models/mentor.model.js");
const Playlist = require("../models/playlist.model.js");
const Video = require("../models/video.model.js");

let allPlaylists = [
  {
    playlistName: "Live Talks",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "The Future of Media Entrepreneurship @SIMC, PUNE",

        embededLink: "https://www.youtube.com/embed/bOMrGECs7kI",
        thumbnail: "https://i.ibb.co/4Kj8B50/maxresdefault-6.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "LIVE FROM IIT ROORKEE- THE SECRET TO HAVING GREAT CONVERSATIONS",

        embededLink: "https://www.youtube.com/embed/Lr0i3_pFDPo",
        thumbnail: "https://i.ibb.co/xLY0rP8/maxresdefault-5.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "LIVE FROM DELHI TECHNOLOGICAL UNIVERSITY",

        embededLink: "https://www.youtube.com/embed/gQKIIq91EAA",
        thumbnail: "https://i.ibb.co/nj7cPsx/maxresdefault-4.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "LIVE FROM SVC, DELHI UNIVERSITY",

        embededLink: "https://www.youtube.com/embed/mhsKuUNLACY",
        thumbnail: "https://i.ibb.co/4jWsjXh/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "STEREOTYPES, SOCIETY and the YOUTUBE DADDY",

        embededLink: "https://www.youtube.com/embed/-0agIi5sIxU",
        thumbnail: "https://i.ibb.co/WFw1W6H/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Prakhar's Advice to Genz | Dealing with Procrastination & Failure",

        embededLink: "https://www.youtube.com/embed/LkoP00u4G4A",
        thumbnail: "https://i.ibb.co/Nyyrjzh/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "How to Develop a STRONG MINDSET to Combat Hard Times",

        embededLink: "https://www.youtube.com/embed/iydrZ6yxjZI",
        thumbnail: "https://i.ibb.co/9NZpT8V/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Papa ke Pravachan",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "THIS WILL CHANGE YOUR SOCIAL LIFE | PAPA KE PRAVACHAN EP4",

        embededLink: "https://www.youtube.com/embed/VSduGJo0CuU",
        thumbnail: "https://i.ibb.co/74xSGJF/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "MANAGE YOUR TIME TO WIN LONG TERM | PAPA KE PRAVACHAN EP3",

        embededLink: "https://www.youtube.com/embed/tIeCQOcSP98",
        thumbnail: "https://i.ibb.co/CwqBG28/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "SUCCESS KA 2 STEP FORMULA| PAPA KE PRAVACHAN",

        embededLink: "https://www.youtube.com/embed/vpr9fIaSHmw",
        thumbnail: "https://i.ibb.co/PYMY3S4/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "LIFE IS TOUGH, MAKE THE MOST OF IT | PAPA KE PRAVACHAN EP2",

        embededLink: "https://www.youtube.com/embed/vVViUhyXLZA",
        thumbnail: "https://i.ibb.co/KKvYXbq/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Spirituality",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "THE SPIRITUALITY OF SELF",

        embededLink: "https://www.youtube.com/embed/efcWCrmICNI",
        thumbnail: "https://i.ibb.co/C6GGgJs/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "THE PROBLEM WITH MODERN SPIRITUALITY",

        embededLink: "https://www.youtube.com/embed/ZkB3N6K80GI",
        thumbnail: "https://i.ibb.co/zPGY6ns/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Prakhar takes a shit on 'spirituality'",

        embededLink: "https://www.youtube.com/embed/G_A2LVW1Vrk",
        thumbnail: "https://i.ibb.co/YZcM2P2/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "#1 Secret to STAY CALM",

        embededLink: "https://www.youtube.com/embed/k0QYSKLY4tE",
        thumbnail: "https://i.ibb.co/NYypQV8/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Interview with designers",
    videos: [
      {
        mentor: "",
        playlist: "",
        title:
          "Live Design Case Studies with King Sidharth, Product & Design @ Headout | Design & Process stream",

        embededLink: "https://www.youtube.com/embed/jdne_SwILSQ",
        thumbnail: "https://i.ibb.co/m5G3Lj2/maxresdefault-5.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Design Q&A with Darshan Gajara, design consultant and founder of Product Disrupt",

        embededLink: "https://www.youtube.com/embed/m2T1aPfshnk",
        thumbnail: "https://i.ibb.co/hMgQcyN/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Design Q&A with Shashank Sahay, Designer at Microsoft",

        embededLink: "https://www.youtube.com/embed/rYkFQLSSaIM",
        thumbnail: "https://i.ibb.co/VVdN3WD/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Design Q&A with Saptarshi Prakash, Lead Designer at Swiggy",

        embededLink: "https://www.youtube.com/embed/soBEttAoTGw",
        thumbnail: "https://i.ibb.co/RHnTQDJ/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Design Q&A with Abheyraj Singh, designer at GoEuro Berlin",

        embededLink: "https://www.youtube.com/embed/agXAcxQvAxI",
        thumbnail: "https://i.ibb.co/JKtc5rn/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Design Crashcourse",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "Design terms you should know",

        embededLink: "https://www.youtube.com/embed/omKQsOPAjjk",
        thumbnail: "https://i.ibb.co/vjNmg8S/maxresdefault.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Steps in the design process",

        embededLink: "https://www.youtube.com/embed/oSz5KTdKW88",
        thumbnail: "https://i.ibb.co/gFrJhW7/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "How to develop an eye for good design",

        embededLink: "https://www.youtube.com/embed/T4BvVOC_J_k",
        thumbnail: "https://i.ibb.co/k0m2XjM/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Learn UI design in 25 minutes - Figma tutorial",

        embededLink: "https://www.youtube.com/embed/RKILkYOHRXk",
        thumbnail: "https://i.ibb.co/4skVvwh/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "The best way to practice design - Part 1",

        embededLink: "https://www.youtube.com/embed/pBgufXz2lbU",
        thumbnail: "https://i.ibb.co/CVFJ29R/maxresdefault-4.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Practice design by copying - Part 2",

        embededLink: "https://www.youtube.com/embed/lEfyEbwfi0k",
        thumbnail: "https://i.ibb.co/FK1hMW4/maxresdefault-5.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Sketch, Adobe XD or Figma?",

        embededLink: "https://www.youtube.com/embed/bUFjEPOO488",
        thumbnail: "https://i.ibb.co/brVKWkK/maxresdefault-6.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Podcasts",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "You're Playing This Game (Without Even Realizing)",

        embededLink: "https://www.youtube.com/embed/XWFGOAjDx9w",
        thumbnail: "https://i.ibb.co/SmmbJPk/maxresdefault-11.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "The Mindset Shift You Need In Your 20s (MUST WATCH!)",

        embededLink: "https://www.youtube.com/embed/npWiCWFsJ8A",
        thumbnail: "https://i.ibb.co/dm01ykY/maxresdefault-10.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Social Media Scam: Are We Slave To The Algorithm? ft. @Sirhud Kalra",

        embededLink: "https://www.youtube.com/embed/2kjiOVflcYU",
        thumbnail: "https://i.ibb.co/Cm6CX2F/maxresdefault-9.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "A Billionaire's Take on Money, Space & Healthcare ft. @Naveen Jain",

        embededLink: "https://www.youtube.com/embed/YceBBkLvXsw",
        thumbnail: "https://i.ibb.co/5njMBpK/maxresdefault-7.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "How Can Creators Get Paid More ft. @Prakhar ke Pravachan",

        embededLink: "https://www.youtube.com/embed/tEb26KfFvpU",
        thumbnail: "https://i.ibb.co/fQKwQWX/maxresdefault-6.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "The @Nas Daily Story & Tips For Content Creators",

        embededLink: "https://www.youtube.com/embed/YDmnuQ1T9k4",
        thumbnail: "https://i.ibb.co/QPpt1vJ/maxresdefault-5.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Sales Vs Marketing - Who Will Win? ft. Mohit Ahuja & @Vaibhav Sisinty",

        embededLink: "https://www.youtube.com/embed/Aa4cjtR7snY",
        thumbnail: "https://i.ibb.co/FWBXGyq/maxresdefault-4.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Nostalgic Ads That Will Take You Back to Childhood ft. @Mad Over Marketing (M.O.M)",

        embededLink: "https://www.youtube.com/embed/ZPXsnVpaQ2Y",
        thumbnail: "https://i.ibb.co/TY6VDNN/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "BECOME AN INFLUENCER IN YOUR 20s ft. @Raj Shamani Vs @Divyanshu Damani",

        embededLink: "https://www.youtube.com/embed/BdTAFtwm5Fo",
        thumbnail: "https://i.ibb.co/SfnQP7H/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Life is a gamble? Lessons for Life from the Poker Table ft. Arnold Mascarenhas",

        embededLink: "https://www.youtube.com/embed/n5J2daZ9xWE",
        thumbnail: "https://i.ibb.co/9NshJM2/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "World Of Finance",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "How To Read Company Financials",

        embededLink: "https://www.youtube.com/embed/mIoHSQxSGpI",
        thumbnail: "https://i.ibb.co/pzHRZ92/m-Io-HSQx-SGp-I-HD.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Understanding Health Insurance | smallcase Review | 2021",

        embededLink: "https://www.youtube.com/embed/hum8D2hSoKg",
        thumbnail: "https://i.ibb.co/5B7rJHL/hum8-D2h-So-Kg-HD-1.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "What's Happening With Gold? | smallcase Review | 2021",

        embededLink: "https://www.youtube.com/embed/_yRgmRM1LDM",
        thumbnail: "https://i.ibb.co/D9Td49J/y-Rgm-RM1-LDM-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Buy Real Estate Or REIT It In 2021?",

        embededLink: "https://www.youtube.com/embed/n4hB-nSrrtE",
        thumbnail: "https://i.ibb.co/QrqJ2kB/n4h-B-n-Srrt-E-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Investing In 20s Simplified | Top 3 Tools For Fundamental Analysis Of Growth Stocks - Ep. 3 | 2021",

        embededLink: "https://www.youtube.com/embed/rT-kPOy4irM",
        thumbnail: "https://i.ibb.co/gVpqKv0/r-T-k-POy4ir-M-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "Investing In Your 20s Simplified - 2021 by @Shashank Udupa | Episode 1",

        embededLink: "https://www.youtube.com/embed/qsCUE7kzFHA",
        thumbnail: "https://i.ibb.co/1vPJ8GL/qs-CUE7kz-FHA-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Elon Buys Bitcoin, Dogecoin Up - What's Happening?",

        embededLink: "https://www.youtube.com/embed/R7b_VzfVmb0",
        thumbnail: "https://i.ibb.co/w07z5kK/R7b-Vzf-Vmb0-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Budget 2021 India - Is it good for you?",

        embededLink: "https://www.youtube.com/embed/wwWf2sNxEKQ",
        thumbnail: "https://i.ibb.co/Ld9WqqP/ww-Wf2s-Nx-EKQ-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Stock market crash in 2021?? Time to be careful!",

        embededLink: "https://www.youtube.com/embed/EQ32FlhSCZw",
        thumbnail: "https://i.ibb.co/3k1gBH5/EQ32-Flh-SCZw-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Should you buy Tesla Stock in 2021?",

        embededLink: "https://www.youtube.com/embed/zeBZACg9-v4",
        thumbnail: "https://i.ibb.co/gPNcDYk/ze-BZACg9-v4-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "What To Expect From Budget 2021? (And Why You Should Care)",

        embededLink: "https://www.youtube.com/embed/LwuHJ6BCiSs",
        thumbnail: "https://i.ibb.co/X714WXC/Lwu-HJ6-BCi-Ss-HD.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Bitcoin. Boom or Bubble?",

        embededLink: "https://www.youtube.com/embed/rU8mVb_bc-M",
        thumbnail: "https://i.ibb.co/8YJJM6n/r-U8m-Vb-bc-M-HD.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "IPO review",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "Zomato IPO Review 2021",

        embededLink: "https://www.youtube.com/embed/jp_yX0EG7PE",
        thumbnail: "https://i.ibb.co/P1kMjJw/maxresdefault.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Burger King IPO with @Shashank Udupa ft. Dr. Elson",

        embededLink: "https://www.youtube.com/embed/fYhS8MFPiUw",
        thumbnail: "https://i.ibb.co/J3M6s82/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Meta Start up",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "METASTARTUP Episode 1: My Story",

        embededLink: "https://www.youtube.com/embed/mB5kuXNi0xs",
        thumbnail: "https://i.ibb.co/NrVCnmC/sddefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "METASTARTUP Episode 2: Why you SHOULDN'T startup",

        embededLink: "https://www.youtube.com/embed/p5nemzWv2pg",
        thumbnail: "https://i.ibb.co/NrVCnmC/sddefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title:
          "STARTUPS VS STABLE JOBS - YOUR JOB IS NOT SECURE | METASTARTUP #3",

        embededLink: "https://www.youtube.com/embed/VYw3XqvLU6w",
        thumbnail: "https://i.ibb.co/NrVCnmC/sddefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "HOW MUCH CAPITAL DO YOU NEED TO STARTUP | METASTARTUP #4",

        embededLink: "https://www.youtube.com/embed/iaoTQTWF940",
        thumbnail: "https://i.ibb.co/NrVCnmC/sddefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "HOW TO NAME YOUR STARTUP | METASTARTUP #5",

        embededLink: "https://www.youtube.com/embed/EdRcKb2541o",
        thumbnail: "https://i.ibb.co/NrVCnmC/sddefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "HOW TO REGISTER A COMPANY IN INDIA? | METASTARTUP #6",

        embededLink: "https://www.youtube.com/embed/-GVlwruv7Tg",
        thumbnail: "https://i.ibb.co/cJ7pCDx/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title:
          "OPENING A CORPORATE BANK ACCOUNT, CREDIT CARDS, FIRST BOARD MEETING & MORE | METASTARTUP #7",

        embededLink: "https://www.youtube.com/embed/WxMgSg_BpPI",
        thumbnail: "https://i.ibb.co/xhdRj7K/maxresdefault.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "REGISTERING A COMPANY IN SINGAPORE, USA OR ESTONIA | METASTARTUP #8",

        embededLink: "https://www.youtube.com/embed/azSErrdqgbU",
        thumbnail: "https://i.ibb.co/wyt7FRJ/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title:
          "HOW TO RAISE A SEED ROUND FOR A STARTUP IN INDIA? | METASTARTUP #9",

        embededLink: "https://www.youtube.com/embed/tR1mLfs2Xqo",
        thumbnail: "https://i.ibb.co/0GP3sVw/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "HOW TO RAISE A SERIES A IN INDIA | METASTARTUP #10",

        embededLink: "https://www.youtube.com/embed/eT3tW-vXnUU",
        thumbnail: "https://i.ibb.co/Lk0VvHF/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "HOW TO DO AN INITIAL PUBLIC OFFERING | METASTARTUP #11",

        embededLink: "https://www.youtube.com/embed/-pYCFSEQTFo",
        thumbnail: "https://i.ibb.co/Cncxj1T/maxresdefault-4.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "BANKRUPTCY AND LIQUIDATION | METASTARTUP #12",

        embededLink: "https://www.youtube.com/embed/kByAtHlrjQ4",
        thumbnail: "https://i.ibb.co/Qd8TbdG/maxresdefault-5.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "HOW TO SELL YOUR COMPANY + TIPS ON VALUATION | METASTARTUP #13",

        embededLink: "https://www.youtube.com/embed/w-r8VYhxYYg",
        thumbnail: "https://i.ibb.co/zRynrNT/maxresdefault-6.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Cero",
    videos: [
      {
        mentor: "",
        playlist: "",
        title: "How to make a Human Apex Predator",

        embededLink: "https://www.youtube.com/embed/urhMZSeG33U",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Are we in a Simulation? Probably not.",

        embededLink: "https://www.youtube.com/embed/FpwUqfhwwFQ",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "The Big Bang is still happening",

        embededLink: "https://www.youtube.com/embed/MEPBV_DBFII",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },

      {
        mentor: "",
        playlist: "",
        title: "Quantum Suicide",

        embededLink: "https://www.youtube.com/embed/4KnVmju4EeQ",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Why children NEED fairytales",

        embededLink: "https://www.youtube.com/embed/HzMqVulxBCM",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Indian Superman",

        embededLink: "https://www.youtube.com/embed/7pYhPm5IKkY",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Physics IS Spirituality",

        embededLink: "https://www.youtube.com/embed/XIaIptj-Xd4",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Instagram is the best example of the Peak Shift effect",

        embededLink: "https://www.youtube.com/embed/eDIuH_Q2cxw",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "What if Mickey Mouse was conscious?",

        embededLink: "https://www.youtube.com/embed/LLCeoDxBuig",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
      {
        mentor: "",
        playlist: "",
        title: "Why young entrepreneurs are arrogant",

        embededLink: "https://www.youtube.com/embed/RFkCt4iJIIo",
        thumbnail: "https://i.ibb.co/5cpfMX0/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Tea with Tanay",
    videos: [
      {
        title:
          "S01E00 TeaWithTanay. Why, what and how of this new podcast series!",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/GDYhoRbYH3o",
        thumbnail: "https://i.ibb.co/N11Cz5D/maxresdefault-4.jpg",

        views: 0,
        comments: [],
      },

      {
        title:
          "14 Books for Growth and Startups ft. Priyadeep Sinha | Episode 01 of teawithtanay",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/5ZZG4SOzPkw",
        thumbnail: "https://i.ibb.co/QCgG0Jz/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },

      {
        title:
          "Programming Projects ft. Rachit Gulati | TeaWithTanay Podcast Season 1 Episode 2",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/PU4zArf71Yg",
        thumbnail: "https://i.ibb.co/ZcNGkgH/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        title:
          "Building Communities ft. Anubha from GirlScript | TeaWithTanay Podcast Season 1 Episode 3",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/cXFMlxKx9A8",
        thumbnail: "https://i.ibb.co/CPvTpHQ/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        title:
          "Getting Started with Open Source ft. Rahul Kadyan | S01 EP4 of teawithtanay",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/QhnU7kO8u_I",
        thumbnail: "https://i.ibb.co/n0pkWjY/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Carrer moves",
    videos: [
      {
        title: "Web Dev Projects to get you a job?",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/Vrwltd0y7p0",
        thumbnail: "https://i.ibb.co/0hLMKr6/maxresdefault.jpg",

        views: 0,
        comments: [],
      },

      {
        title: "Internships or not?",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/InVDXJCHLww",
        thumbnail: "https://i.ibb.co/Vp6NGyb/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },

      {
        title: "Startup or Service Companies?",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/Zp8a0IskmkE",
        thumbnail: "https://i.ibb.co/9HM3xgS/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },

      {
        title: "Masters or not?",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/JbGjZk_EQpg",
        thumbnail: "https://i.ibb.co/pbKWLRx/sddefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
  {
    playlistName: "Neog Camp",
    videos: [
      {
        title: "launching neog.camp: roadmap to full stack dev",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/Ezk2AwqgS9Q",
        thumbnail: "https://i.ibb.co/SN9w8dk/maxresdefault-6.jpg",

        views: 0,
        comments: [],
      },

      {
        title: "First CLI App: Intro to programming",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/_L-UszPmy2A",
        thumbnail: "https://i.ibb.co/1bNTD69/maxresdefault-5.jpg",

        views: 0,
        comments: [],
      },

      {
        title: "Getting started with Git, VSCode and Hosting",
        mentor: "",
        playlist: "",

        embededLink: "//www.youtube.com/embed/MMEIVh49pS8",
        thumbnail: "https://i.ibb.co/4gT7wx2/maxresdefault-4.jpg",

        views: 0,
        comments: [],
      },

      {
        title: "Getting started with HTML5",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/No8qdcVYiQw",
        thumbnail: "https://i.ibb.co/Sx3MtL3/maxresdefault-3.jpg",

        views: 0,
        comments: [],
      },
      {
        title: "Getting started with CSS3",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/u6_a0d94A1Q",
        thumbnail: "https://i.ibb.co/zfGHRVz/maxresdefault-2.jpg",

        views: 0,
        comments: [],
      },
      {
        title: "JavaScript in the browser!",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/yLZazznWoAs",
        thumbnail: "https://i.ibb.co/MBxTbbZ/maxresdefault-1.jpg",

        views: 0,
        comments: [],
      },
      {
        title: "First React App: Introduction to ReactJS library",
        mentor: "",
        playlist: "",

        embededLink: "https://www.youtube.com/embed/KUJsaM-hAjs",
        thumbnail: "https://i.ibb.co/8xP6nrh/maxresdefault.jpg",

        views: 0,
        comments: [],
      },
    ],
  },
];

router.post("/", async (req, res) => {
  try {
    await Promise.all(
      allPlaylists.map(async ({ playlistName, videos }) => {
        let playlistResponse = await Playlist.findOne({ name: playlistName });

        let mentorResponse = await Mentor.findOne({
          userId: playlistResponse.userId,
        });

        let mentorId = mentorResponse._id;
        let playlistId = playlistResponse._id;

        let videoIdArray = [];
        await Promise.all(
          videos.map(async (video) => {
            video.mentor = mentorId;
            video.playlist = playlistId;

            let NewVideo = new Video(video);
            let videoResponse = await NewVideo.save();

            videoIdArray.push(videoResponse._id);
          })
        );
        playlistResponse.videos = videoIdArray;
        playlistResponse = await playlistResponse.save();

        let piyush = await Playlist.findOne({ name: playlistName });
      })
    );
    res.send("sucess");
  } catch (error) {
    console.error("error ->", error);
    res.send(error);
  }
});

module.exports = router;
