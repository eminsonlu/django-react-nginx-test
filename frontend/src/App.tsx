import {  useState } from "react";

function App() {
  const [text, setText] = useState<string>("");

  const onClick = async () => {
    const response = await fetch(import.meta.env.VITE_APP_API);
    const data = await response.json();
    setText(data);
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-6 text-3xl text-white">
      <h1>You have a message from django</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-2xl hover:bg-blue-700 transition-all" onClick={onClick}>Click Me</button>
      <p className="text-xl">{text}</p>
    </div>
  );
}

export default App;
