anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});

anime({
  targets: ".box2",
  translateX: 250,
  translateY: 250,
  easing: "easeInQuart",
  loop: true,
  direction: "alternate",
  duration: 1000,
  borderRadius: "50%",
});

anime({
  targets: ".box3",
  translateX: {
    value: 400,
    delay: 1000,
    duration: 1000,
  },
  rotate: {
    value: 360,
    delay: 1000,
    durtaion: 1200,
  },
});
