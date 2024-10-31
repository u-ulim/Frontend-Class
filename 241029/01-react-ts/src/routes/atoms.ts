import { atom } from "recoil";

// state의 정의가 여러 개 있을 수 있다.
const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export { isDarkAtom };
