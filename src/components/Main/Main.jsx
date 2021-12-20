import { Headline } from "../Headline/Headline";
import { Links } from "../Links/Links";
import classes from "./Main.module.css";
import { useEffect } from "react";

export function Main(props) {
  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "lightblue";
    /* ↑マウント時の処理を書く */
    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = "";
      /* アンマウント時の処理を書く */
    };
  }, []);
  /* useEffectでDOM要素に直接直接干渉することは控える */
   return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
