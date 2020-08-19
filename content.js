console.log(window.location);

let loc = window.location;

const frontPageUrl = new RegExp("youtube.com/?$", "g");

const watchPageURrl = new RegExp(".*youtube.com/watch.*", "g");

console.log("location: " + loc);
cancel(loc);

setInterval(() => {
  if (window.location !== loc) {
    loc = window.location;
    cancel(loc);
  }
}, 1000);

function cancel(location) {
  if (isFrontPage(location)) {
    const primary = document.querySelector("#primary");
    primary.style.display = "none";
  } else if (isWatchPage(location)) {
    const sidebar = document.querySelector("#secondary");

    sidebar.style.display = "none";

    const pI = document.querySelector("#primary-inner");
    const comments = document.querySelector("#comments");
    comments.style.display = "none";
    removeEndScreen();
  }
}

function isFrontPage(location) {
  return frontPageUrl.test(location);
}

function isWatchPage(location) {
  return watchPageURrl.test(location);
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
