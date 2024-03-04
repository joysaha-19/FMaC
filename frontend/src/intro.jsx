import React, { useRef, useEffect } from "react";
import './intro1.css';

export default function Rough() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Change this value to your desired playback speed
    }
  }, []);

  return (
    <div className="parentintro1">
      <div className="filmreels1">
        <video ref={videoRef} width="110%" height="110%" autoPlay muted >
          <source src="./introdf1.mp4" type="video/mp4" />
          <source src="./movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
