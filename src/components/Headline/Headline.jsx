import classes from "./Headline.module.css";

export function Headline(props) {
  return (
    <>
      <h1 className={classes.title}>
        Welcome to <a href="https://nextjs.org">{props.page} page!!</a>
      </h1>

      <p className={classes.description}>
        こんにちは started by editing {props.children}
      </p>
    </>
  );
}
