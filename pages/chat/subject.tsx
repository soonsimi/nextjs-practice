import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Subject: NextPage = () => {
  const commands = [
    {
      command: "ストップ",
      callback: () => SpeechRecognition.stopListening(),
    },
    {
      command: "消して",
      callback: () => resetTranscript(),
    },
    {
      command: "入力して",
      callback: () => setChats([...chats, transcript.slice(0, -4)]),
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  const [chat, setChat] = useState<string>("");
  const [chats, setChats] = useState<string[]>([]);
  const [record, setRecord] = useState<string>("");

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const onSubmit = (event: any) => {
    event?.preventDefault();
    if (chat) {
      setChats([...chats, chat]);
      setChat("");
    }
  };

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;

    setChat(value);
  };

  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "ja",
    });

  const stopListening = (event: any) => {
    event?.preventDefault();
    if (transcript) {
      setChats([...chats, transcript]);
      setChat("");
      resetTranscript();
    }
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="w-screen h-full flex flex-col">
      <div className="fixed w-full p-3 bg-sky-700 text-center text-white">
        <p>Eureco chatting app (prototype)</p>
      </div>
      <ul className="flex flex-col items-end pt-10 pb-28 px-3 my-5 text-right space-y-5">
        {chats.map((chat, i) => (
          <li
            key={i}
            className=" py-3 px-5 break-words overflow-y-scroll bg-slate-500 rounded-full rounded-br-none shadow-md"
          >
            <h4 className="text-white text-right">{chat}</h4>
          </li>
        ))}
      </ul>
      <div ref={scrollRef}></div>
      <div className="fixed bottom-0 pb-5 border-t-2 bg-slate-100 w-full">
        {listening ? (
          <form
            className="w-full py-5 flex justify-center items-center"
            onClick={stopListening}
          >
            <div className="w-9/12 mr-3 relative">
              <input
                value={transcript}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
                className="appearance-none shadow-md text-gray-400 w-full border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
              {transcript ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 absolute right-3 inset-y-3 text-gray-400 transition"
                  onClick={stopListening}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 animate-ping absolute right-4 inset-y-4 text-gray-400 transition"
                  onClick={stopListening}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              )}
            </div>
            <input
              type="submit"
              value="Enter"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 border border-transparent rounded-md shadow-md text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none"
            />
          </form>
        ) : (
          <form
            onClick={onSubmit}
            className="w-full py-5 flex justify-center items-center"
          >
            <div className="w-9/12 mr-3 relative">
              <input
                onChange={onChange}
                value={chat}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
                className="appearance-none relative shadow-md text-gray-400 w-full border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute right-3 inset-y-3 text-gray-400 transition"
                onClick={startListening}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <input
              type="submit"
              value="Enter"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 border border-transparent rounded-md shadow-md text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Subject;
