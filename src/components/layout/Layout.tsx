import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export interface ReactChildren {
  children: React.ReactNode;
}

const Layout = (props: ReactChildren) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
