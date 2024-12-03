import React from "react";
import Header from "./Header";

const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;
