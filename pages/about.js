import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Fotter } from "../components/Footer";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="about"/>

      <Fotter />
    </div>
  );
}

/* 
childrenとpropsの使い分けはどちらも優劣はないからどちらで渡してもいいけど、慣習的にコンポーネントが一つの時はchildrenで渡すことが
多いのでできる限りコンポーネントはchildrenで渡してその他のものはpropsを使うと良い、ただし複数のコンポーネントを渡すときはpropsで名前つけてあげたほうがいい */
