import { useEffect, useState } from "react";

export default function Popup() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date().toISOString());
  }, []);

  const close = () => {
    window.close()
  }

  return (
    <div>
      <h1>
        Popup<small>{now}&nbsp;</small>
      </h1>
      <a href="#" onClick={close}>Close</a>
    </div>
  );
}
