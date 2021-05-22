interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => (
  <div>
    {color}
    <button onClick={onClick}>Click Me</button>
  </div>
);

export const ChildFC: React.FC<ChildProps> = ({ color, onClick }) => (
  <div>
    {color}
    <button onClick={onClick}>Click Me</button>
  </div>
);
