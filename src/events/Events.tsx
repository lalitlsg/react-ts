const Events = () => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("I/'m being dragged");
  };

  return (
    <div>
      <input type="text" onChange={inputChangeHandler} />
      <div draggable onDragStart={dragStartHandler}>
        Drag Me
      </div>
    </div>
  );
};

export default Events;
