const name = "Youtube Zen Mode";

const frontPageUrl = new RegExp("youtube.com/?$", "g");

const isFrontPage = () => frontPageUrl.test(window.location);

/*
const watchPageURrl = new RegExp("youtube.com/watch", "g");

const isWatchPage = () => watchPageURrl.test(window.location);
*/
if (isFrontPage()) {
  const primary = document.querySelector("#primary");
  primary.style.display = "none";
} else {
  const sidebar = document.querySelector("#secondary");

  console.log("secondary: " + sidebar);
  sidebar.style.display = "none";

  const pI = document.querySelector("#primary-inner");
  const comments = document.querySelector("#comments");
  comments.style.display = "none";
  console.log("comments: " + comments);
}

const domVideo = document.querySelector("video");
if (domVideo) {
  domVideo.addEventListener("ended", function (e) {
    const videoEndscreen = document.querySelector(".html5-endscreen");
    if (videoEndscreen) {
      videoEndscreen.style.display = "none";
    }
  });
  console.log("listener applyed");
}

function hideEverything() {
  coverWithDiv(document.body);
}

function coverWithDiv(node) {
  coverWithDivInsertAt(node, node.firstChild);
}

function coverWithDivInsertAt(node, insertAtChild) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = "0";
  div.style.top = "0";
  div.style.width = node.offsetWidth + "px";

  div.style.height = getHeight() + "px";
  div.style.backgroundColor = "white";
  div.style.zIndex = "9999";

  div.innerHTML = `
  <br>
  <center>
  <br>
  
    <h4>Hello, you should <i>NOT </i>be looking at random videos.</h4>
    <br>
  
    <h4>The goal of the algorithm is to keep you watching. Not to make you happy</h4> 
    <br>
  
  </center>`;

  const relativeDiv = document.createElement("div");
  relativeDiv.style.position = "relative";
  relativeDiv.appendChild(div);

  node.insertBefore(relativeDiv, insertAtChild);
  node.style.overflowY = "hidden";
  div.focus();
}

function getHeight() {
  const body = document.body,
    html = document.documentElement;

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  return height;
}
