import { useState } from "react";
import axios from "axios";
function App() {
  // 2. submit 이벤트 등록
  const [user, setUser] = useState({ email: "", password: "" });
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // 3. API 서버 호출
      const res = await axios.post("https://11.fesp.shop/users/login", user, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "client-id": "00-nike",
        },
      });
      setData(res.data.item);
      // 4. 로그인 성공 메세지 출력
      alert(`${data.name}님의 로그인이 성공하셨습니다`);
    } catch (err) {
      // 5. 로그인 실패 메세지 출력
      console.error(err);
      if (err.status === 422) {
        setError({ msg: "Id나 비밀번호가 잘못 입력되었습니다." });
      } else {
        setError({ msg: "오류가 발생하였습니다" });
      }
      alert(error.msg);
    }
  };
  function onChange(e) {
    const { name, value } = e.target;
    setUser((data) => ({ ...data, [name]: value }));
  }
  return (
    // 1. JSX 작성
    <>
      <h1>로그인</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="id">ID: </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={onChange}
        />
        <br /> <label htmlFor="password">PW: </label>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={onChange}
        />
        <br /> <button>등록</button>
      </form>
    </>
  );
}
export default App;
