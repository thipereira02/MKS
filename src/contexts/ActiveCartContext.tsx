import { createContext } from "react";

interface ActiveCartContextData {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

const ActiveCartContext = createContext({} as ActiveCartContextData);

export default ActiveCartContext;