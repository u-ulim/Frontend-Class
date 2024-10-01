import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth, storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { getDocs, limit, orderBy } from "firebase/firestore";
import { IPost } from "../components/TimeLine";
import Post from "../components/Post";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AvatarUpload = styled.label`
  width: 80px;
  height: 80px;
  background: #1d9bf0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 50px;
  }
`;

const AvatarInput = styled.input`
  display: none;
`;

const Name = styled.span`
  font-size: 22px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AvatarImg = styled.img`
  object-fit: cover;
`;

const Profile = () => {
  const user = auth.currentUser;
  const [avatar, setAvater] = useState(user?.photoURL || null || undefined);

  const [posts, setPosts] = useState<IPost[]>([]);
  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user?.uid}`);
      const result = await uploadBytes(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvater(avatarUrl);
      await updateProfile(user, {
        photoURL: avatarUrl,
      });
    }
  };
  return (
    <Wrapper>
      <AvatarUpload htmlFor="avatar">
        {Boolean(avatar) ? (
          <AvatarImg src={avatar} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <AvatarImg />
      </AvatarUpload>
      <AvatarInput
        id="avatar"
        onChange={onAvatarChange}
        type="file"
        accept="image/*"
      />
      {/* <Name>{user?.displayName ? user.displayName : "Anonymous"}</Name> */}
      {/* => 단란 회로 평가 */}
      <Name>{user?.displayName ?? "Anonymous"}</Name>
    </Wrapper>
  );
};

export default Profile;
