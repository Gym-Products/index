import { Container } from "./styles";
import { MdAdd } from "react-icons/md";

import { IDietList } from "@interfaces";
import { Card } from '@components/Molecules';

const List: React.FC<IListComponentProps> = ({ data, listIndex }) => {
  return (
    <Container done={data.done || false}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              index={index}
              listIndex={listIndex}
              data={card}
            />
          );
        })}
      </ul>
    </Container>
  );
};

interface IListComponentProps {
  data: IDietList;
  listIndex: number;
}

export default List;
