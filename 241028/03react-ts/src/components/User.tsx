import React from "react";
import { useParams, Outlet } from "react-router-dom";
import { users } from "../db";
import { Link } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>
        User with id {userId} is name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      {/* oulet을 통한, 컴포넌트 생성 x */}
      {/* 절대 경로와 상대 경로의 차이점 "/"을 안 붙이면 상대 경로, "/"을 붙이면 절대 경로*/}
      <Link to={"followers"}>See Followers</Link>
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;
