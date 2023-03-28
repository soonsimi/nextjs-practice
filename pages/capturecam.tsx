import { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

const Capturecam: NextPage = () => {
  const webcamRef: any = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const captureImage = () => {
    const image = webcamRef.current.getScreenshot({
      width: 1920,
      height: 1080,
    });
    setImageSrc(image);
    setHasPhoto(true);
  };

  return (
    <div>
      <div
        className={`md:my-10 flex justify-center relative ${
          hasPhoto ? "hidden" : "block"
        }`}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          height={720}
        />
        <button
          onClick={captureImage}
          className={`w-10 h-10 absolute bottom-8 rounded-full bg-emerald-500 ring-4 ring-offset-2 ring-black shadow-2xl hover:bg-emerald-600 active:bg-emerald-800 transition duration-200 ${
            hasPhoto ? "hidden" : "block"
          }`}
        ></button>
      </div>
      {imageSrc && (
        <div className="relative">
          <Image
            src={imageSrc}
            alt="your image"
            width={window.screen.width}
            height={window.screen.height}
            className={`bg-black relative ${hasPhoto ? "block" : "hidden"}`}
          />
          <button
            onClick={() => setHasPhoto(false)}
            className={`rounded px-2 text-sm border border-white bg-blue-600 text-white hover:bg-blue-700 absolute right-10 bottom-5 transition ${
              hasPhoto ? "block" : "hidden"
            }`}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
export default Capturecam;
