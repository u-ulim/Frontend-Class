import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  // const ctx = useOutletContext();
  // console.log(ctx);
  // 이러한 형태의 객체는 존재하지 않는다. (예측 불가하다. => 제너릭)
  const { nameOfMyUsers } = useOutletContext<FollowersContext>();

  return <h1>Here is {nameOfMyUsers}의 Follwers</h1>;
};

export default Followers;
