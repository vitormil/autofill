import { useEffect, useState } from "react";

export default function Home() {
  const [now, setNow] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNow(new Date().toISOString());
  }, []);

  const iframeLoadHandler = () => {
    setLoading(false);
  };

  const submitHandler = () => {
    setTimeout(() => setLoading(true), 1);
  };

  return (
    <div>
      <h1>
        Sign in (iframe target)<small>{now}</small>
      </h1>
      {loading ? (
        <div style={{ minHeight: "70px" }}>Loading...</div>
      ) : (
        <form
          method="post"
          action="/api/auth"
          target="auth"
          autocomplete="on"
          onSubmit={submitHandler}
          style={{ maxWidth: "300px", minHeight: "70px" }}
        >
          <input
            type="text"
            name="username"
            autocomplete="username"
            id="password_name"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            autocomplete="current-password"
            id="password_field"
            placeholder="Password"
            required
          />
          <button type="submit" value="submit" id="password_submit">
            Login
          </button>
        </form>
      )}
      <br />
      <br />
      <iframe
        name="auth"
        className={loading ? "loading" : ""}
        onLoad={iframeLoadHandler}
      ></iframe>
    </div>
  );
}
