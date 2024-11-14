import { useState } from "react";
// let count = 0;
export default function Message() {
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
    setCount(count + 1);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <span>입력 메세지: {msg} </span>
      <br />
      <span>입력 횟수: {count}</span>
    </div>
  );
}
