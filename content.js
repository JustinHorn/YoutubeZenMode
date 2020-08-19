let loc = window.location.href;

const frontPageUrl = new RegExp("youtube.com/?$", "g");

const watchPageURrl = new RegExp("youtube.com/watch", "g");

cancel(loc);

setInterval(() => {
  if (window.location.href !== loc) {
    loc = window.location.href;
    setTimeout(() => {
      cancel(loc);
    }, 1000);
  }
}, 1000);

function cancel(location) {
  //chrome.runtime.sendMessage("showPageAction");
  if (isFrontPage(location)) {
    console.log("p will be gone");
    displayNone("#primary");
    displayNone(".style-scope .ytd-page-manager");
  } else if (isWatchPage(location)) {
    displayNone("#secondary");
    displayNone("#related");
    displayNone("#chat");

    displayNone("#comments");

    removeEndScreen();
  }
}

function displayNone(query) {
  const node = document.querySelector(query);
  if (node) {
    node.style.display = "none";
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
