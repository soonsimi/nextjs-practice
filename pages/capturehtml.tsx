import { NextPage } from "next";
import { useState, useEffect, useRef } from "react";

const Capturehtml: NextPage = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasphoto, setHasPhoto] = useState(false);

  const getVideo: any = async () => {
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1920, height: 1080 },
      });
      console.log(stream);
      let video: any = videoRef.current;
      video.srcObject = stream;
      video.play();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="flex flex-col items-center">
      <div className="my-10">
        <video ref={videoRef} className="w-96 scale-x-[-1]"></video>
      </div>
      <button className="w-10 h-10 rounded-full bg-emerald-500 ring-4 ring-offset-2 ring-black shadow-2xl hover:bg-emerald-600 active:bg-emerald-800 transition duration-200"></button>
    </div>
  );
};

export default Capturehtml;