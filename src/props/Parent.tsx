import React from "react";
import { Child, ChildFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={() => console.log("clicked1")} />
      <ChildFC color="blue" onClick={() => console.log("clicked2")} />
    </div>
  );
};

export default Parent;
