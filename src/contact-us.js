import Left from "./left";
import Right from "./right";
import { useEffect, useState, useMemo } from "react";

export default function ContactUs() {
  const [leftcounter, setleftcounter] = useState(0)
  const [enableright, setenableright] = useState(false)

  // useEffect(() => {
  //   alert("welcome!");
  // }, [])

  const validate = () => {
    leftcounter > 10 ? setenableright(true) : setenableright(false)
  }
  return (
    <div>
      contact us
      <button onClick={() => validate()}>validate</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "red",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "lightblue",
            height: "100vw",
          }}
        >
          <Left leftcounter={leftcounter} setleftcounter={setleftcounter} />
        </div>
        <div style={{ width: "50%", backgroundColor: "lightpink" }}>
          <Right btndisable={!enableright} />
        </div>
      </div>
    </div>
  );
}
