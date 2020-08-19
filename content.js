const name = "Youtube Zen Mode";

const frontPageUrl = new RegExp("youtube.com/?$", "g");

const isFrontPage = () => frontPageUrl.test(window.location);

const watchPageURrl = new RegExp(".*youtube.com/watch.*", "g");

const isWatchPage = () => watchPageURrl.test(window.location);

if (isFrontPage()) {
  const primary = document.querySelector("#primary");
  primary.style.display = "none";
} else if (isWatchPage()) {
  const sidebar = document.querySelector("#secondary");

  sidebar.style.display = "none";

  const pI = document.querySelector("#primary-inner");
  const comments = document.querySelector("#comments");
  comments.style.display = "none";
  removeEndScreen();
}

function removeEndScreen() {
  const domVideo = document.querySelector("video");
  if (domVideo) {
    domVideo.addEventListener("ended", function (e) {
      const videoEndscreen = document.querySelector(".html5-endscreen");
      if (videoEndscreen) {
        videoEndscreen.style.display = "none";
      }
    });
  }
}
