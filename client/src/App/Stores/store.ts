import { createContext, useContext } from "react";
import UserStore from "./userStore";

interface Store {
    userStore: UserStore
}

export const store: Store = {
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

// Custom hook
export const useStore = () => {
    return useContext(StoreContext);
}
