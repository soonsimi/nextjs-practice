import { NextPage } from "next";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Speech: NextPage = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening: any = () =>
    SpeechRecognition.startListening({ continuous: true, language: "ja-JP" });

  const isServer = typeof window === "undefined";
  if (!browserSupportsSpeechRecognition && !isServer) {
    return <span>Browser doesn&apost surpport SR</span>;
  }

  return (
    <div>
      <div>
        <span>Mic : {listening ? "on" : "off"}</span>
      </div>
      <div>
        <button
          className="py-3 px-2 m-3 rounded-full bg-emerald-500 ring-4 ring-offset-2 ring-black shadow-2xl hover:bg-emerald-600 active:bg-emerald-800 transition duration-200"
          onClick={startListening}
        >
          Start
        </button>

        <button onClick={SpeechRecognition.stopListening}>Stop</button>

        <button onClick={resetTranscript}>Reset</button>
      </div>
      <span>ment : {transcript}</span>
    </div>
  );
};

export default Speech;
