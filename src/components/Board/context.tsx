/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import { ILoadLists } from "../../services/api";

export default createContext({
    lists: [] as ILoadLists[],
    move: (_from: number, _to: number, _listIndex: number, _targetListIndex: number) => {},
})