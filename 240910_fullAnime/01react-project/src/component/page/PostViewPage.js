import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import styled from "styled-components";

import CommentList from "../list/CommentList";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% -32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 16px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

const PostContainer = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 16px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const PostViewPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });

  return (
    <Wrapper>
      <Container>
        <Button title="뒤로가기" onClick={() => navigate("/")} />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments}></CommentList>
        <TextInput height={40} />
        <Button title="댓글작성하기" onClick={() => navigate("/")} />
      </Container>
    </Wrapper>
  );
};

export default PostViewPage;
