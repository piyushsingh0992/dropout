let [loader, loaderSetter] = useState(false);
async function getVideoDetails(videoId, playlistId, mentorId) {
  try {
    let { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyATxM5nmulSZgGxsx87C26NsSd7FJlm80o`
    );
    console.log("data ->", data.items[0].snippet.thumbnails);
    let videoData = {
      title: data.items[0].snippet.title,
      mentor: "",
      playlist: playlistId,
      embededLink: `https://www.youtube.com/embed/${videoId}`,
      thumbnail: data.items[0].snippet.thumbnails.medium.url,
      views: 0,
      comments: []
    };

    return videoData;
  } catch (error) {
    return {};
  }
}

async function getVideoData(url) {
  let urlItemArray = url.split("=");
  let videoId = urlItemArray[1];

  try {
    loaderSetter(true);
    let videoData = await getVideoDetails(videoId, "playlistId");
    
    let { status, data } = await axios.post(
      `https://dropout.piyushsingh6.repl.co/video/${userId}/create`,
      {
        videoData
      }
    );
    if (status === 200) {
      loaderSetter(false);
    } else {
    }
  } catch (error) {}
}
useEffect(() => {
  let x = "https://www.youtube.com/watch?v=zqsp7nRPkyk";
  getVideoData(x);
}, []);
