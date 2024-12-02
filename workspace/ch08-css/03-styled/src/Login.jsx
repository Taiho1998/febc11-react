import { Button, Submit } from "@components/StyledButton";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input color-red-blue"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="input color-blue-red"
            required
          />
        </div>
        <Button bg="gray" color="blue">
          회원가입
        </Button>
        <Button bg="yellow" color="red">
          카카오 로그인
        </Button>
        <Submit size="12px">로그인</Submit>
      </form>
    </div>
  );
}

export default Login;
