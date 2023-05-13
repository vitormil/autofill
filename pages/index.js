import { useEffect, useState } from "react";

export default function Home() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date().toISOString());
  }, []);

  return (
    <div>
      <h1>
        Home - v2<small>{now}</small>
      </h1>
      <a href="/login">1 - Login (form submit)</a><br/>
      <a href="/signin">2 - Sign in (iframe target)</a>
    </div>
  );
}
