import React from "react";

interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => <div>{color}</div>;

export const ChildFC: React.FC<ChildProps> = ({ color }) => <div>{color}</div>;
