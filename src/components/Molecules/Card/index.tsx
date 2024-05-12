import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Container, Label } from "./styles";
import { useDietContext } from "@contexts";
import { IDietCard } from "@interfaces";

const Card: React.FC<ICardComponentProps> = ({ data, index, listIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { move } = useDietContext();

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { type: "CARD", index: index, listIndex: listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: any, monitor) {
      const draggedIndex = item.index;
      const draggedListIndex = item.listIndex;
      const targetIndex = index;
      const targetListIndex = listIndex;

      if (draggedIndex === targetIndex && draggedListIndex && targetListIndex) {
        return;
      }
      if (ref.current === null) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();

      if (draggedOffset === null) {
        return;
      }

      const draggedTop = draggedOffset.y - targetSize.top;

      // If the dragged element is above the target element and the dragged element is less than half of the target element, return
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      // If the dragged element is below the target element and the dragged element is less than half of the target element, return
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedIndex, targetIndex, draggedListIndex, targetListIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map((label) => {
          return <Label key={label} color={label} />;
        })}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
};

interface ICardComponentProps {
  data: IDietCard;
  index: number;
  listIndex: number;
}

export default Card;
