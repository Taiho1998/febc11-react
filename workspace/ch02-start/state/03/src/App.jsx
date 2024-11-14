import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  return (
    <>
      <h1>03 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div
        onPointerMove={(event) => {
          // position.x = event.clientX;
          // position.y = event.clientY;

          const newPosition = { x: event.clientX, y: event.clientY - 80 };

          setPosition(newPosition);

          console.log(position);
        }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}

export default App;
