import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

import styled from "styled-components";
import { auth, db } from "../firebase";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  resize: none;
  height: 250px;
  &::placeholder {
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    transition: opacity 0.3s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
    outline: none;
    border-color: #1d9bf9;
  }
`;

const AttachFileButton = styled.label`
  width: 100%;
  color: #1d9bf9;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #1d9bf9;
  border-radius: 20px;
  padding: 10px 0;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid transparent;
    background: #1d9bf9;
    color: #fff;
  }
`;

const AttachFileInput = styled.input`
  display: none;
`;
const SubmitBtn = styled.input`
  background: #fff;
  color: #1d9bf9;
  border: none;
  border-radius: 20px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover,
  &:acitve {
    opacity: 0.9;
  }
`; // 정의 수정

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState("");

  // 파일의 초기값을 무엇으로 정의해야하는가?
  // Type Script의 or는 버티컬바가 한 개
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    console.log(files);
    if (files && files.length === 1) setFile(files[0]);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user || post === "" || post.length > 180) return;

    try {
      setIsLoading(true);
      await addDoc(collection(db, "contents"), {
        post,
        createdAt: Date.now(),
        username: user?.displayName || "Anonymous",
        userId: user.uid,
      });
    } catch (e) {
      console.error();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        name="contents"
        id="contents"
        value={post}
        placeholder="What is Happening?"
        onChange={onChange}
      ></TextArea>

      <AttachFileButton htmlFor="file">
        {file ? "Contents Added🌞" : "Add🌚"}
      </AttachFileButton>
      <AttachFileInput
        onChange={onFileChange}
        type="file"
        id="file"
        accept="video/*, image/*"
      />
      <SubmitBtn type="submit" value={isLoading ? "Posting.." : "Post"} />
    </Form>
  );
};

export default PostForm;
