import { AspectRatio, Overlay } from '@mantine/core';

export default function Video() {
    const videoSource = "/video.mp4";

  return (
    <AspectRatio ratio={16 / 9}>
      <video
          muted
          autoPlay
          loop
          id="video-id"
          className='video' 
          poster="image/aufbruch.jpg" >
          {/* TODO make it accept multiple media types */}
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <Overlay
                gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 30%)"
                opacity={0.85}
            />
    </AspectRatio>
  );
}