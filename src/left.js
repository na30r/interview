import { useState } from "react";
const Left = ({ leftcounter, setleftcounter }) => {

  return (
    <>
      <button onClick={() => setleftcounter(leftcounter + 1)}>clicked {leftcounter} times.</button>
    </>
  );
};

export default Left;
