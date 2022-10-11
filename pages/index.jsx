import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilsStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>Hello, I'm <b>Redon</b>.I'm a software engineer。You can contact me on <a href="https://twitter.com/YuZhao48340494">Twitter</a>. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
