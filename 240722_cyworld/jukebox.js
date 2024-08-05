const songs = document.querySelectorAll(".albumTable_song");

// songs.forEach((song) => {
//   console.log(song);
// });

// 유사배열이나, 배열에 많이 쓰이는 반복문 (for of)
for (let song of songs) {
  console.log(song);
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}


// e객체 > target || current Target
// currentTarget : 이벤트 핸들러가 부착되어진 요소를 의미 
// target : 실제 이벤트가 발생된 요소를 의미!



