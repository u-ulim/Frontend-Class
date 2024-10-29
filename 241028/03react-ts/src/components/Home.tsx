import React from "react";
import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  // 순서는 첫번째 params값 찾기, 두번째 찾아오기
  const [readSearchParams, setSearchParams] = useSearchParams();
  // console.log(readSearchParams.has("geo"));
  // console.log(readSearchParams.get("geo"));
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "241030",
    });
  }, 3000);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
