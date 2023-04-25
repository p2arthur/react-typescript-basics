interface EventProps {}

const EventComponent: React.FC<EventProps> = () => {
  const onChange = (event: React.ChangeEvent) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.pageY);
    console.log("I'm being dragged");
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag-me
      </div>
    </div>
  );
};

export default EventComponent;
