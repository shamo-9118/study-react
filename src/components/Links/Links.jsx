import classes from "./Links.module.css";

export function Links() {
  const ITEMS = [
    {
      href: "https://nextjs.org/docs",
      tittle: "Documentation \u2192;",
      description: "Find in-depth information about Next.js features and API.",
    },
    {
      href: "https://nextjs.org/learn",
      tittle: "Learn \u2192;",
      description: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      href: "https://github.com/vercel/next.js/tree/master/examples",
      tittle: "Examples \u2192;",
      description: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      tittle: "Deploy \u2192;",
      description:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];

  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h2>{item.tittle}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}

