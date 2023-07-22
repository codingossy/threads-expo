import * as React from "react";
import { Threads } from "../types-ts";
import { generateThreads } from "../actions/getData";


export const ThreadContext = React.createContext<Threads[]>([]);

export const ThreadProvdier = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = React.useState<Threads[]>([]);

  React.useEffect(() => {
    setThreads(generateThreads());
  }, []);

  return (
    <ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>
  );
};
