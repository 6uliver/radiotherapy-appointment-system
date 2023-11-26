import { createContext } from "react";
import { FractionsForSchedulerQuery } from "../../gql/graphql";

export const FractionContext = createContext<
  FractionsForSchedulerQuery["machineById"]["fractionsByDate"]
>([]);

export const FractionProvider = FractionContext.Provider;
