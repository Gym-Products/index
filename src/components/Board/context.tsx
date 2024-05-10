import { createContext } from "react";
import { ILoadLists } from "../../services/api";

export default createContext({
    lists: [] as ILoadLists[],
    move: (from: number, to: number, listIndex: number, targetListIndex: number) => {},
})