import React from "react";
import { produce } from "immer";

import { Container } from "./styles";
import List from "../List";

import { loadLists } from "../../services/api";
import BoardContext from "./context";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = React.useState(data);

  function move(from: number, to: number, fromList: number, toList: number) {
    const newLists = produce(lists, (draft) => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    });
    setLists(newLists);
  }

  return (
    <BoardContext.Provider value={{ move: move, lists: lists }}>
      <Container>
        {lists.map((list, index) => {
          return <List key={list.title} listIndex={index} data={list} />;
        })}
      </Container>
    </BoardContext.Provider>
  );
}
