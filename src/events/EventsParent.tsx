import { useState, useMemo } from "react";
import Events from "./Events";

const EventsParent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ empName: "Lalit" });

  // stop re-rendering child in case if object does not change
  const da = useMemo(() => {
    return { empName: data.empName };
  }, [data.empName]);

  return (
    <div className="App">
      <Events data={da} />
      <button onClick={() => setCount((p) => p + 1)}>click - {count}</button>
      <button onClick={() => setData({ empName: "Vishal" })}>change</button>
    </div>
  );
};

export default EventsParent;
