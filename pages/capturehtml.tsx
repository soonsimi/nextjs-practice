import { NextPage } from "next";
import { useState, useEffect, useRef } from "react";

const Capturehtml: NextPage = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo: any = async () => {
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video:
          window.innerWidth < 480
            ? {
                width: 1920,
                height: 1080,
                facingMode: { exact: "environment" },
              }
            : { width: 1920, height: 1080 },
      });
      let video: any = videoRef.current;
      video.srcObject = stream;
      video.play();
    } catch (error) {
      console.log(error);
    }
  };

  const takePhoto = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let video: any = videoRef.current;
    let photo: any = photoRef.current;

    photo ? (photo.width = width) : null;
    photo ? (photo.height = height) : null;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    console.log(ctx);
    setHasPhoto(true);
  };

  const savePhoto = () => {
    let photo: any = photoRef.current;
    let ctx = photo.getContext("2d");

    let image = photo.toDataURL();
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = image;
    a.download = "Image";
    a.click();
    a.remove();
  };

  const closePhoto = () => {
    let photo: any = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="w-screen h-screen fixed flex flex-col items-center">
      <div
        className={`md:my-10 flex justify-center relative ${
          hasPhoto ? "hidden" : "block"
        }`}
      >
        <video
          ref={videoRef}
          className="w-screen md:w-2/3 md:scale-x-[-1]"
          playsInline
        ></video>
        <button
          onClick={takePhoto}
          className={`w-10 h-10 absolute bottom-8 rounded-full bg-emerald-500 ring-4 ring-offset-2 ring-black shadow-2xl hover:bg-emerald-600 active:bg-emerald-800 transition duration-200 ${
            hasPhoto ? "hidden" : "block"
          }`}
        ></button>
      </div>
      <div className={`bg-black relative ${hasPhoto ? "block" : "hidden"}`}>
        <canvas ref={photoRef}></canvas>
        <button
          onClick={savePhoto}
          className="rounded px-2 text-sm border border-white bg-blue-600 text-white hover:bg-blue-700 absolute left-10 bottom-5 transition"
        >
          SAVE
        </button>
        <button
          onClick={closePhoto}
          className="rounded px-2 text-sm border border-white bg-blue-600 text-white hover:bg-blue-700 absolute right-10 bottom-5 transition"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Capturehtml;
