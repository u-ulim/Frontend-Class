import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
// import { Auth, signOut } from "firebase/auth";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  max-width: 860px;
  height: 100%;
  margin: 0 auto;
  padding: 50px 0;
  border: 1px solid skyblue;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 30px;
    fill: #fff;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;

const Layout = () => {
  const navigate = useNavigate();

  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to logout?");

    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  return (
    <Wrapper>
      <Menu>
        <Link to={"/"}>
          <MenuItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5} // stroke-width를 strokeWidth로 변경
              stroke="currentColor"
              className="size-6" // class를 className으로 변경
            >
              <path
                strokeLinecap="round" // stroke-linecap을 strokeLinecap으로 변경
                strokeLinejoin="round" // stroke-linejoin을 strokeLinejoin으로 변경
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </MenuItem>
        </Link>
        <Link to={"/profile"}>
          <MenuItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5} // stroke-width를 strokeWidth로 변경
              stroke="currentColor"
              className="size-6" // class를 className으로 변경
            >
              <path
                strokeLinecap="round" // stroke-linecap을 strokeLinecap으로 변경
                strokeLinejoin="round" // stroke-linejoin을 strokeLinejoin으로 변경
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </MenuItem>
        </Link>
        <MenuItem className="log-out" onClick={onLogOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5} // stroke-width를 strokeWidth로 변경
            stroke="currentColor"
            className="size-6" // class를 className으로 변경
          >
            <path
              strokeLinecap="round" // stroke-linecap을 strokeLinecap으로 변경
              strokeLinejoin="round" // stroke-linejoin을 strokeLinejoin으로 변경
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </MenuItem>
      </Menu>

      <Outlet />
    </Wrapper>
  );
};

export default Layout;
