import * as React from "react";


export const ThreadContext = React.createContext<Thread[]>([]);

export const ThreadProvdier = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = React.useState<Thread[]>([]);

  React.useEffect(() => {
    setThreads(generateThreads());
  }, []);

  return (
    <ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>
  );
};
