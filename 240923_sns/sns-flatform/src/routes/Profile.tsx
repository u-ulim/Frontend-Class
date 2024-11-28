// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { auth, storage, db } from "../firebase";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { updateProfile } from "firebase/auth";
// import {
//   collection,
//   doc,
//   getDocs,
//   limit,
//   orderBy,
//   query,
//   where,
// } from "firebase/firestore";
// import { IPost } from "../components/TimeLine";
// import Post from "../components/Post";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
// `;

// const AvatarUpload = styled.label`
//   width: 80px;
//   height: 80px;
//   background: #1d9bf0;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   cursor: pointer;
//   svg {
//     width: 50px;
//   }
// `;

// const AvatarInput = styled.input`
//   display: none;
// `;

// const Name = styled.span`
//   font-size: 22px;
// `;

// const Posts = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const AvatarImg = styled.img`
//   object-fit: cover;
// `;

// const Profile = () => {
//   const user = auth.currentUser;
//   const [avatar, setAvater] = useState(user?.photoURL || null || undefined);

//   const [posts, setPosts] = useState<IPost[]>([]);
//   const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { files } = e.target;

//     if (!user) return;
//     if (files && files.length === 1) {
//       const file = files[0];
//       const locationRef = ref(storage, `avatars/${user?.uid}`);
//       const result = await uploadBytes(locationRef, file);
//       const avatarUrl = await getDownloadURL(result.ref);
//       setAvater(avatarUrl);
//       await updateProfile(user, {
//         photoURL: avatarUrl,
//       });
//     }
//   };

//   const fetchPosts = async () => {
//     // compoonent가 마운트 되는 시점에 무조건 실행
//     // fireSotre주의
//     const postQuery = query(
//       collection(db, "contents"),
//       where("userId", "==", user?.uid),
//       orderBy("createdAt", "desc"),
//       limit(25)
//     );
//     // 잘 안 될 때는 await 주기
//     const snapshot = await getDocs(postQuery);
//     const posts = snapshot.docs.map((doc) => {
//       const { createAt, photo, video, post, userId, username } = doc.data();
//       return {
//         createAt,
//         photo,
//         video,
//         post,
//         userId,
//         username,
//         id: doc.id,
//       };
//     });
//   };

//   useEffect(() => {
//     // useEffect 실행

//     fetchPosts();
//   }, []);

//   return (
//     <Wrapper>
//       <AvatarUpload htmlFor="avatar">
//         {Boolean(avatar) ? (
//           <AvatarImg src={avatar} />
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="size-6"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         )}
//         <AvatarImg />
//       </AvatarUpload>
//       <AvatarInput
//         id="avatar"
//         onChange={onAvatarChange}
//         type="file"
//         accept="image/*"
//       />
//       {/* <Name>{user?.displayName ? user.displayName : "Anonymous"}</Name> */}
//       {/* => 단란 회로 평가 */}
//       <Name>{user?.displayName ?? "Anonymous"}</Name>

//       {posts.map((post) => (
//         <Post key={post.id} {...post} />
//       ))}
//     </Wrapper>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth, storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
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

const ChangeNameButton = styled.button`
  background: #3b3a3a;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 16px;
`;

const NameInput = styled.input`
  background: #000;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 8px 10px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Profile = () => {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL || null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName ?? "Anonymous");

  const onChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNameBtn = async () => {
    if (!user) return;
    setEditMode((current) => !current);
    if (!editMode) return;
    try {
      await updateProfile(user, {
        displayName: name,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setEditMode(false);
    }
  };

  // 프로필 이미지 변경
  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user?.uid}`);
      const result = await uploadBytes(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvatar(avatarUrl);
      await updateProfile(user, {
        photoURL: avatarUrl,
      });
    }
  };

  // 사용자 게시물 가져오기
  const fetchPosts = async () => {
    if (!user) return;

    try {
      const postQuery = query(
        collection(db, "contents"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      const snapshot = await getDocs(postQuery);
      const fetchedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IPost[];
      setPosts(fetchedPosts); // 상태 업데이트
    } catch (error) {
      console.error("게시물 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // 컴포넌트 마운트 시 게시물 가져오기
  }, []);

  return (
    <Wrapper>
      <AvatarUpload htmlFor="avatar">
        {avatar ? (
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
      </AvatarUpload>
      <AvatarInput
        id="avatar"
        onChange={onAvatarChange}
        type="file"
        accept="image/*"
      />

      {/* <Name>{user?.displayName ? user.displayName : "Anonymous"}</Name> 
      => 단란 회로 평가  <Name>{user?.displayName ?? "Anonymous"}</Name> */}

      {editMode ? (
        <NameInput onChange={onChangeNameInput} value={name} />
      ) : (
        <Name>{user?.displayName ?? "Anonymous"}</Name>
      )}
      <ChangeNameButton onClick={onChangeNameBtn}>
        {editMode ? "Save" : "New"}
      </ChangeNameButton>

      <Posts>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Posts>
    </Wrapper>
  );
};

export default Profile;
