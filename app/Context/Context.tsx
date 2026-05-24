import { createContext } from "react";
import { Portfolio } from "../models/Type";

export type PortfolioContextType = {
  portfolio: Portfolio[];
  inspect: (text: string) => void;
};

export const MyContext = createContext<PortfolioContextType>({
  portfolio: [],
  inspect: () => {}
});
