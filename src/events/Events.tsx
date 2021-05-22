import React from "react";

const Events: React.FC<{ data: { empName: string } }> = ({ data }) => {
  console.log("rendering");
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("I/'m being dragged");
  };

  return (
    <div>
      <div>{data.empName}</div>
      <input type="text" onChange={inputChangeHandler} />
      <div draggable onDragStart={dragStartHandler}>
        Drag Me
      </div>
    </div>
  );
};

export default React.memo(Events);

// stop re-rendering in case if object does not change

// export default React.memo(Events, (prevProps, nextProps) => {
//   if (prevProps.data.empName === nextProps.data.empName) {
//     return true;
//   }
//   return false;
// });
