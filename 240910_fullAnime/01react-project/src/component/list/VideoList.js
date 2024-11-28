import React from "react";

import { useRef } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 168px;
  height: 108px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const VideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoList = ({ onClick, videoUrl, thumbnailUrl }) => {
  // const handleMouseEnter = () => {
  //   if (videoRef.current) {
  //     videoRef.current.style.opacity = 1;
  //     // videoRef.current.play();
  //   }
  // };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const videoRef = useRef();
  console.log(videoRef);
  return (
    <Wrapper
      onClick={onClick}
      // onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VideoContent ref={videoRef} src={videoUrl} />
      <ImageContent src={thumbnailUrl} alt="Thumbnail" />
    </Wrapper>
  );
};

export default VideoList;
