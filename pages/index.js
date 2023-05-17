import { useEffect, useState } from "react";

export default function Home() {
  const [now, setNow] = useState(null);

  const data = {
    aboutBlank: 0,
    notInstance: 0,
    instanceClosed: 0,
    instanceNotclosed: 0,
  }

  useEffect(() => {
    setNow(new Date().toISOString());
  }, []);

  const popupTest = (event) => {
    let instance = window.open("/popup");
    const intervalTimer = setInterval(() => {
      if (!instance) {
        data.notInstance++
        return
      }
      if (instance?.location?.href === 'about:blank') {
        data.aboutBlank++
        return
      }
      if (instance.closed) {
        data.instanceClosed++
        return
      }
      data.instanceNotclosed++
    }, 1000)
    setTimeout(() => {
      clearInterval(intervalTimer)
      instance = null
      alert(JSON.stringify(data))
    }, 6_000)
    event.preventDefault()
  }

  return (
    <div>
      <h1>
        Home - v4<small>{now}&nbsp;</small>
      </h1>
      <a href="/login">1 - Login (form submit)</a><br/>
      <a href="/signin">2 - Sign in (iframe target)</a><br/>
      <a href="#" onClick={popupTest}>3 - Popup test</a>
    </div>
  );
}
