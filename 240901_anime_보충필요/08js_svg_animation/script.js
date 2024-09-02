const path = anime.path(".svg path");

console.log(path);

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  duration: 10000,
  loop: true,
  easing: "linear",
  
});
