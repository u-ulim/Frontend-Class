import React from "react";
import styled from "styled-components";
import Button from "./Commons/Button";

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
  /* font-family: "Nanum Pen Script", cursive; */
`;

const ListContents = styled.div`
  border: 1px solid skyblue;
`;

// OPTIONS =>

const options = [
  {
    id: 1,
    name: "최신순",
    type: "latest",
  },
  {
    id: 2,
    name: "오래된 순",
    type: "oldest",
  },
];

const DiaryList = () => {
  return (
    <Wrapper>
      <DiaryContents>
        <LeftContent>
          <Select>
            {options.map((it) => (
              <option key={it.id}>{it.name}</option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button type={"positive"} text={"새 일기 쓰기"} />
        </RightContent>
      </DiaryContents>
      <ListContents></ListContents>
    </Wrapper>
  );
};

export default DiaryList;
