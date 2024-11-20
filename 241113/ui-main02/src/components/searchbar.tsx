"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // next/navi에서 가져오기

const Searchbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={search} type="text" onChange={onChangeSearch} />
        <input type="submit" value="검색" />
      </form>
    </div>
  );
};

export default Searchbar;
