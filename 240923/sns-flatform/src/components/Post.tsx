import React, { useState } from "react";
import styled from "styled-components";
import { IPost } from "./TimeLine";
import { auth, db, storage } from "../firebase";

import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  ref,
  getDownloadURL,
  StorageError,
  StorageErrorCode,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 10px;
  /* margin-bottom: 20px; */
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`;

const Video = styled.video`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`;

const UserName = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const PayLoad = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const DeleteButton = styled.button`
  background: #ff6348;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
`;

const EditorColumns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EditButton = styled.button`
  background: #7f8689;
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

const EditPostFormTextArea = styled.textarea`
  background: #000;
  color: #fff;
  width: 94%;
  height: 50%;
  resize: none;
  padding: 10px;
  margin: 10px 0px;
  font-size: 16px;
  border-radius: 10px;
  &::placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
    outline: none;
    border: 1px solid #1d9bf0;
  }
`;

const CancelButton = styled.button`
  background: #7f8689;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  background: #1d9bf0;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

const SetContentButton = styled.label`
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1d9bf0;
  }
  svg {
    width: 24px;
  }
`;

const SetContentInputButton = styled.input`
  display: none;
`;

const Post = ({
  id,
  createdAt,
  photo,
  video,
  post,
  userId,
  userName,
}: IPost) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);
  const [editedPhoto, setEditedPhoto] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedPost(e.target.value);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const user = auth.currentUser;

  const onDelete = async () => {
    const ok = confirm("Are you sure you want to delete this post?");
    if (!ok || user?.uid !== userId) return;
    // if (user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, `contents`, id));
      if (photo) {
        const photoRef = ref(storage, `contents/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.error(e);
    } finally {
    }
  };

  const onUpdate = async () => {
    try {
      if (user?.uid !== userId) return;

      const postDoc = await getDoc(doc(db, "contents", id));
      if (!postDoc.exists()) throw new Error("Documents does not exist");

      const postData = postDoc.data();

      if (postData) {
        if (postData.photo) postData.fileType = "image";
        if (postData.video) postData.fileType = "video";
      }

      const exsitingFileType = postData.fileType || null;

      if (editedPhoto) {
        const newFileType = editedPhoto.type.startsWith("image/")
          ? "image"
          : "video";

        if (exsitingFileType && exsitingFileType !== newFileType) {
          alert("You Can Only Upload The Same Type Of Contents");
          return;
        }

        const locationRef = ref(storage, `contents/${user.uid}/${id}`);
        const uploadTask = uploadBytesResumable(locationRef, editedPhoto);
        if (editedPhoto.size >= 5 * 1024 * 1024) {
          uploadTask.cancel();
          throw new StorageError(
            StorageErrorCode.CANCELED,
            "File size is over 5MB"
          );
        }
        const result = await uploadBytes(locationRef, editedPhoto);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc(db, "contents", id), {
          post: editedPost,
          photo: newFileType === "image" ? url : "",
          video: newFileType === "video" ? url : "",
          fileType: newFileType,
        });
      } else {
        await updateDoc(doc(db, "contents", id), { post: editedPost });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsEditing(false);
    }
  };

  const onClickSetContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) setEditedPhoto(files[0]);

    // 기존에 사진이 없는 게시물은 업데이트가 안됨. ㅠ
  };

  return (
    <Wrapper>
      <Column>
        <UserName>{userName}</UserName>
        {isEditing ? (
          <EditPostFormTextArea
            onChange={onChange}
            value={editedPost}
            placeholder={post}
          ></EditPostFormTextArea>
        ) : (
          <PayLoad>{post}</PayLoad>
        )}

        <EditorColumns>
          {user?.uid === userId ? (
            <>
              {isEditing ? (
                <>
                  <CancelButton onClick={handleCancel}>Cancel</CancelButton>{" "}
                  <UpdateButton onClick={onUpdate}>Update</UpdateButton>
                  <SetContentButton htmlFor="edit-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </SetContentButton>
                  <SetContentInputButton
                    id="edit-content"
                    type="file"
                    accept="video/*, image/*"
                    onChange={onClickSetContent}
                  />
                </>
              ) : (
                <EditButton onClick={handleEdit}>Edit</EditButton>
              )}

              <DeleteButton onClick={onDelete}>DELETE</DeleteButton>
            </>
          ) : null}
        </EditorColumns>
      </Column>
      <Column>
        {photo ? <Photo src={photo} /> : null}
        {video ? <Video src={video} /> : null}
      </Column>
    </Wrapper>
  );
};

export default Post;
