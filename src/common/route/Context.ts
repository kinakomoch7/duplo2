import { createContext } from "react";
import { User } from "../../types/user";

export const userContext = createContext<User | null>(null);