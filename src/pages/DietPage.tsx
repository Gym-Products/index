import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DefaultTemplate } from "@templates";
import { Board } from "@components/Organisms";

const DietPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DefaultTemplate>
        <Board />
      </DefaultTemplate>
    </DndProvider>
  );
};

export default DietPage;
