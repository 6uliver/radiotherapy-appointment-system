import { createContext } from "react";
import { Fraction } from "../../gql/graphql";

export const FractionContext = createContext<Partial<Fraction>[]>([]);

export const FractionProvider = FractionContext.Provider;
