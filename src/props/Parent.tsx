import React from "react";
import { Child, ChildFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color="red" />
      <ChildFC color="blue" />
    </div>
  );
};

export default Parent;
