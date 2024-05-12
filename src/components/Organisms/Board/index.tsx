import React, { useEffect, useState } from "react";
import { produce } from "immer";

import { Container } from "./styles";

import { loadLists } from "../../../services/api";
import { DietContextProvider } from "@contexts";

import { BarChart } from "@components/Atoms";
import { List } from "@components/Molecules";


const Board: React.FC = () => {
  const [lists, setLists] = useState<any[]>([]); // Inicializa com um array vazio
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadLists();
        setLists(data);
        setLoading(false); // Defina loading como false quando a carga estiver completa
      } catch (error) {
        console.error("Error loading lists:", error);
      }
    };

    fetchData();
  }, []); // useEffect será executado apenas uma vez

  function move(from: number, to: number, fromList: number, toList: number) {
    const newLists = produce(lists, (draft) => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    });
    setLists(newLists);
  }

  const data2 = [10, 20, 30, 40, 50];
  const labels2 = ['A', 'B', 'C', 'D', 'E'];

  return (
    <DietContextProvider move={move} dietLists={lists}>
      <Container>
        {loading ? ( // Mostra um indicador de carregamento enquanto os dados estão sendo carregados
          <div>Loading...</div>
        ) : (
          lists.map((list, index) => (
            <React.Fragment key={list.title}>
              {index === 2 ? (
                <BarChart data={data2} labels={labels2} />
              ) : null}
              <List key={list.title} listIndex={index} data={list} />
            </React.Fragment>
          ))
        )}
      </Container>
    </DietContextProvider>
  );
}

export default Board;