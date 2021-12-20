import { Headline } from "../Headline/Headline";
import { Links } from "../Links/Links";
import classes from "./Main.module.css";
import { useEffect } from "react";

export function Main(props) {
   return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
