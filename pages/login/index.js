import { useEffect, useState } from "react";

export default function Signin() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date().toISOString());
  }, []);

  return (
    <div>
      <h1>
        Login (form submit)<small>{now}&nbsp;</small>
      </h1>
      <form
        method="post"
        action="/api/login"
        autocomplete="on"
        style={{ maxWidth: "300px", minHeight: "70px" }}
      >
        <input
          type="text"
          name="userid"
          id="userid"
          placeholder="UserID"
          autocomplete="username"
          required
        />
        <input
          type="password"
          name="passcode"
          autocomplete="current-password"
          id="passcode_field"
          placeholder="Passcode"
          required
        />
        <button type="submit" value="submit" id="passcode_submit">
          Login
        </button>
      </form>
    </div>
  );
}
