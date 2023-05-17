import { useEffect, useState } from "react";

export default function Authentication() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date().toISOString());
  }, []);

  return (
    <div>
      <h1>
        Dashboard<small>{now}&nbsp;</small>
      </h1>
      <a href="/">Back</a>
    </div>
  );
}
