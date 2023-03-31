import { NextPage } from "next";
import { useState } from "react";

const Subject: NextPage = () => {
  const [chat, setChat] = useState<string>("");
  const [chats, setChats] = useState<string[]>([]);

  const onSubmit = (event: any) => {
    event?.preventDefault();
    setChats([...chats, chat]);
    setChat("");
    console.log(chats);
  };

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setChat(value);
  };

  return (
    <div className="w-screen flex flex-col">
      <ul className=" pb-20 my-5 space-y-5 overflow-y-auto">
        {chats.map((chat, i) => (
          <li
            key={i}
            className="py-3 px-5 text-right bg-slate-500 rounded-full rounded-br-none shadow-md"
          >
            <h4 className="break-words text-white">{chat}</h4>
          </li>
        ))}
      </ul>
      <div className="w-full fixed bottom-10 left-5 right-5">
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={chat}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            className="appearance-none shadow-md text-gray-400 w-9/12 px-3 py-2 mr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
          <input
            type="submit"
            value="Enter"
            className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Subject;
