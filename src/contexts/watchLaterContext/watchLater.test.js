import { watchLaterManger } from "./reducer";

let videoArray = [
  {
    comments: [],
    embededLink: "https://www.youtube.com/embed/fYhS8MFPiUw",
    likes: 0,
    mentor: {
      banner: "https://i.ibb.co/VSpbTVQ/abhinav.png",
      description: "Abhinav Udupa is founder of avalon-meta,scenes ",
      displayImage:
        "https://res.cloudinary.com/dvib6j4ie/image/upload/v1626360539/dropOut/abhinav/abhinav-1-removebg-preview_1_l9af2z.png",
      heroImage:
        "https://res.cloudinary.com/dvib6j4ie/image/upload/v1626360513/dropOut/abhinav/hero_tghwhf.png",
      name: "Abhinav Gupta",
    },
    playlist: "60f05b27404b6e05e24d3a81",
    thumbnail: "https://i.ibb.co/J3M6s82/maxresdefault-1.jpg",
    title: "Burger King IPO with @Shashank Udupa ft. Dr. Elson",
    views: 0,

    _id: "60f05b55404b6e05e24d3b05",
  },
  {
    comments: [],
    embededLink: "https://www.youtube.com/embed/2kjiOVflcYU",
    likes: 0,
    mentor: {
      banner: "https://i.ibb.co/VSpbTVQ/abhinav.png",
      description: "Abhinav Udupa is founder of avalon-meta,scenes ",
      displayImage:
        "https://res.cloudinary.com/dvib6j4ie/image/upload/v1626360539/dropOut/abhinav/abhinav-1-removebg-preview_1_l9af2z.png",
      heroImage:
        "https://res.cloudinary.com/dvib6j4ie/image/upload/v1626360513/dropOut/abhinav/hero_tghwhf.png",
      name: "Abhinav Gupta",
    },
    playlist: "60f05b27404b6e05e24d3a84",
    thumbnail: "https://i.ibb.co/Cm6CX2F/maxresdefault-9.jpg",
    title:
      "Social Media Scam: Are We Slave To The Algorithm? ft. @Sirhud Kalra",
    views: 0,

    _id: "60f05b55404b6e05e24d3af2",
  },
  {
    comments: [],
    embededLink: "https://www.youtube.com/embed/2kjiOVflcYU",
    likes: 0,
    mentor: {
      banner: "https://i.ibb.co/VSpbTVQ/abhinav.png",
      description: "Abhinav Udupa is founder of avalon-meta,scenes ",
      displayImage:
        "https://res.cloudinary.com/dvib6j4ie/image/upload/v1626360539/dropOut/abhinav/abhinav-1-removebg-preview_1_l9af2z.png",
      heroImage:
        "https://res.cloudinary.com/dvib6j4ie/image/upload/v1626360513/dropOut/abhinav/hero_tghwhf.png",
      name: "Abhinav Gupta",
    },
    playlist: "60f05b27404b6e05e24d3a84",
    thumbnail: "https://i.ibb.co/Cm6CX2F/maxresdefault-9.jpg",
    title: "How Can Creators Get Paid More ft. @Prakhar ke Pravachan",
    views: 0,

    _id: "60f05b55404b6e05e24d3ak2",
  },
];
test("populating the watch later array on first load", () => {
  const initialState = [];
  const action = {
    type: "FIRST_LOAD",
    payload: {
      videos: videoArray,
    },
  };
  const expectedState = videoArray;

  let result = watchLaterManger(initialState, action);

  expect(result).toEqual(expectedState);
});

test("adding video to watch later playlist", () => {
  const initialState = [videoArray[0], videoArray[1]];
  const action = {
    type: "ADD_TO_WATCH_LATER",
    payload: {
      video: videoArray[2],
    },
  };

  const expectedState = [videoArray[2], videoArray[0], videoArray[1]];

  let result = watchLaterManger(initialState, action);
  expect(result).toEqual(expectedState);
});

test("Removing video from Watch later playlist", () => {
  const initialState = videoArray;
  const action = {
    type: "REMOVE_FROM_WATCH_LATER",
    payload: {
      video: videoArray[videoArray.length - 1],
    },
  };
  const expectedState = videoArray.slice(0, videoArray.length - 1);

  let result = watchLaterManger(initialState, action);
  expect(result).toEqual(expectedState);
});

test("Clearing the watch list Array when your logout", () => {
  const initialState = videoArray;
  const action = {
    type: "LOGOUT",
  };
  const expectedState = [];

  let result = watchLaterManger(initialState, action);
  expect(result).toEqual(expectedState);
});
