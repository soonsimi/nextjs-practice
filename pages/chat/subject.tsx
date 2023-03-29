import { NextPage } from "next";
import { useState } from "react";

const Subject: NextPage = () => {
  const [chat, setChat] = useState<string>("");
  const [chats, setChats] = useState<string[]>([]);

  const onSubmit = (event: any) => {
    event?.preventDefault();
    setChats([...chats, chat]);

    console.log(chats);
  };

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setChat(value);
  };

  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center relative">
      <div className="w-full absolute bottom-5 left-5 right-5">
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={chat}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            className="appearance-none text-gray-400 w-9/12 px-3 py-2 mr-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
          <input
            type="submit"
            value="Enter"
            className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none"
          />
        </form>
      </div>
      <div className=" space-y-5">
        {chats.map((chat, i) => (
          <div
            key={i}
            className="py-3 px-5 bg-slate-500 rounded-lg rounded-br-none"
          >
            <h4 className=" text-white">{chat}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subject;
