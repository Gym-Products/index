/* eslint-disable @typescript-eslint/no-unused-vars */

import { IDietList } from "@interfaces";
import { createContext, useContext } from "react";

type DietContextProps = {
  dietLists: Array<IDietList>;
  move: (
    _from: number,
    _to: number,
    _listIndex: number,
    _targetListIndex: number
  ) => void;
};

type DietContextProviderProps = {
  dietLists: Array<IDietList>;
  move: (
    _from: number,
    _to: number,
    _listIndex: number,
    _targetListIndex: number
  ) => void;
  children: React.ReactNode;
};

const DietContextDefaultValue: DietContextProps = {
  dietLists: [],
  move: (
    _from: number,
    _to: number,
    _listIndex: number,
    _targetListIndex: number
  ) => null,
};

const DietContext = createContext<DietContextProps>(DietContextDefaultValue);

const DietContextProvider = ({
  children,
  dietLists,
  move,
}: DietContextProviderProps) => {
  return (
    <DietContext.Provider value={{ dietLists, move }}>
      {children}
    </DietContext.Provider>
  );
};

export const useDietContext = () => useContext(DietContext);

export default DietContextProvider;
