import { useState, useRef, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { useHistory } from "react-router-dom";
import LoginTopBar from "../Components/LoginTopBar";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await authCtx.onLogin(emailRef.current.value, passwordRef.current.value);
      history.push("/admin-panel");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  };

  return (
    <>
      <LoginTopBar />
      <div className="h-[100vh] realtive bg-orange">
        <form
          onSubmit={loginHandler}
          className="h-auto lg:w-[400px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col p-[20px] bg-white rounded customBoxShadow"
        >
          <h1 className="text-[25px] mb-[20px] text-center">
            Zaloguj się do panelu administracyjnego
          </h1>
          <label className="text-[14px] md:text-[16px] mb-[20px]">
            Podaj email
          </label>
          <input
            className="text-[16px] md:text-[18px] mb-[20px] focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
            ref={emailRef}
            placeholder="Email..."
          ></input>
          <label className="text-[14px] md:text-[16px] mb-[20px]">
            Podaj hasło
          </label>
          <input
            className="text-[16px] md:text-[18px] mb-[20px] focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
            ref={passwordRef}
            placeholder="Password..."
            type="password"
          ></input>
          {error && (
            <p className="text-[16px] mb-[20px] text-orange font-medium ">
              Podano zły email lub hasło
            </p>
          )}
          <button
            disabled={loading}
            className="w-[100%] h-[30px] text-[16px] md:text-[16px] text-white bg-orange rounded"
          >
            Zaloguj się{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
