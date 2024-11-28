import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const Wrapper = styled.div``;
const DiaryContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
  gap: 10px;
`;
const LeftContent = styled.div`
  flex: 1;
`;
const RightContent = styled.div`
  flex: 3;
  & button {
    width: 100%;
  }
`;
const Select = styled.select`
  background: #ececec;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Nanum Pen Script", cursive;
`;
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ListContents = styled.div`
  border: 1px solid skyblue;
`;

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };

    // 이 문법 꼭 체크하기
    const copyList = JSON.parse(JSON.stringify(data));

    // 그렇다면, 배열을 복사해야하는데,, 이걸 전개연산자로 하면 되지 않ㅡㅇ을까?
    // sort는 배열의 원본 배열값을 훼손시키기 때문에 쓰면 안 된다.
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
    console.log(sortType, e);
  };

  const onClickNew = () => {
    navigate("/new");
  };
  return (
    <Wrapper>
      <DiaryContents>
        <LeftContent>
          <Select onChange={onChangeSortType} value={sortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button
            type={"positive"}
            title={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </RightContent>
      </DiaryContents>
      <ListContents>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </ListContents>
    </Wrapper>
  );
};

export default DiaryList;
