import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, useMatch } from "react-router-dom";

const Nav = styled(motion.nav)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  /* background: ${(props) => props.theme.black.darker}; */
  color: ${(props) => props.theme.red};
  font-size: 18px;
  position: fixed;
  top: 0;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Logo = styled(motion.svg)`
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  cursor: pointer;
  path {
    // animation 넣어볼게요!
    stroke-width: 1px;
    stroke: ${(props) => props.theme.white.darker};
  }
  /* border: 1px solid skyblue; */
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Item = styled.li`
  display: flex;
  transition: color 0.3s;
  position: relative;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.black.veryDark};
    cursor: pointer;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  bottom: -4px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 6px;
  height: 6px;
  background: ${(props) => props.theme.red};
  border-radius: 50%;
`;
const Search = styled.span`
  color: ${(props) => props.theme.red};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    transform-origin: right;

    fill: ${(props) => props.theme.red};
  }
`;

const Input = styled(motion.input)`
  // 이거 좋당
  transform-origin: right;
  background: transparent;
  color: ${(props) => props.theme.red};
  border: none;

  /* font-size: 18px; */
  border-bottom: 1px solid ${(props) => props.theme.white.darker};
  &:focus {
    outline: none;
  }
`;

const logoVariants = {
  normal: { fillOpacity: 1 },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: 5,
    },
  },
};

const Header = () => {
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv"); // tv페이지 매칭 / 매칭이되면 true 안되면 false
  const inputAnimation = useAnimation();
  const { scrollY } = useScroll();
  const [searchOpen, setSearchOpen] = useState(false);
  const navAnimation = useAnimation();

  useEffect(() => {
    // scrollY.onChange(() => { // 원래는 이게 되었었음
    scrollY.on("change", () => {
      // 지금은 이렇게 변경이 됨.
      if (scrollY.get() > 60) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY]);

  const openSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }

    setSearchOpen((prev) => !prev);
  };

  const navVariants = {
    top: { backgroundColor: "rgba(0, 0, 0, 0)" },
    scroll: { backgroundColor: "rgba(0, 0, 0, 1)" },
  };

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Logo
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 111 30"
          variants={logoVariants}
          initial="normal"
          whileHover="active"
          width="1024"
          height="276.742"
          // viewBox="0 0 1024 276.742"
        >
          <motion.path
            // fill="#e50914"
            d="M105.062 14.28 111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28ZM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0Zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657ZM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406Zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874ZM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688ZM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968Z"
          />
        </Logo>
        <Items>
          <Item>
            <Link to={"/"}>
              Home {homeMatch ? <Circle layoutId="circle" /> : null}
            </Link>
          </Item>
          <Item>
            <Link to={"/tv"}>
              TV Shows {tvMatch ? <Circle layoutId="circle" /> : null}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search>
          <motion.svg
            onClick={openSearch}
            animate={{ x: searchOpen ? 0 : 174 }}
            transition={{ type: "linear" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="18px"
            height="18px"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </motion.svg>
          <Input
            type="text"
            transition={{ type: "linear" }}
            placeholder="Search..."
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
          />
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;
