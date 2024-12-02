import { useEffect } from "react";
import { useSelector } from "react-redux";

function Left3() {
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });

  // redux 버전
  // const count = useSelector((state) => state.count);
  // const date = useSelector((state) => state.date);

  //redux - toolkit
  const count = useSelector((state) => state.counterStore.count);
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
