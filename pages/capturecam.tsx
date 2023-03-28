import { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

const Capturecam: NextPage = () => {
  const webcamRef: any = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const captureImage = () => {
    const image = webcamRef.current.getScreenshot({
      width: 1920,
      height: 1080,
    });
    setImageSrc(image);
    setHasPhoto(true);
  };

  const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    faingMode: window.innerWidth < 480 ? "environment" : "user",
  };

  return (
    <div className="w-screen h-screen fixed flex flex-col items-center">
      <div
        className={`flex justify-center relative ${
          hasPhoto ? "hidden" : "block"
        }`}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={window.innerWidth}
          height={window.innerHeight}
          videoConstraints={videoConstraints}
          className="md:scale-x-[-1]"
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
            width={window.innerWidth}
            height={window.innerHeight}
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
