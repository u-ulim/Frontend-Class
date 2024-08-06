const box = document.querySelector("#box");

box.addEventListener("click", (event) => {
  alert(`이벤트 발생위치: ${event.pageX}, ${event.pageY}`);
});

//target => 실제 이벤트가 발생되어진 지점,
