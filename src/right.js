
import React from "react";
alert("rerendered!");

const Right = ({ btndisable }) => {
  return <button disabled={btndisable} onClick={() => { }}>clicked # times.</button>;

};

export default React.memo(Right);
