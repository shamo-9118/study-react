import classes from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.anchor}>index</a>
      </Link>
      <Link href="/about">
        <a className={classes.anchor}>about</a>
      </Link>
    </header>
  );
}
