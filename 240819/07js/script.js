const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const progressCover = document.querySelector(".progress");

const player = document.querySelector(".player");

const play = () => {
  playButton.innerText = "||";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3000);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");

  // 현재값/전체기준값*100
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth - 1;
  const newPosition = (currentTime / duration) * progressBarWidth;

  progressPointer.style.left = `${newPosition}px`;

  console.log(progressBarWidth);
};

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;

  const clickedTime = (mouseX / progressBarWidth) * duration;
  console.log(clickedTime);
  video.currentTime = clickedTime;
};

playButton.addEventListener("click", togglePlay);
volumeBar.addEventListener("change", setVolume);
video.addEventListener("click", setVolume);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
progressCover.addEventListener("click", (e) => {
  videoPoint(e);
});
