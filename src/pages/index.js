import Head from 'next/head';
import PageWrapper from "components/pageWrapper/PageWrapper";
import MainBanner from "components/mainBanner/MainBanner";
import styles from "./index.module.scss";
import clsx from "clsx";

export default function Home() {
  return (
    <div className={clsx(styles.container,)}>
      <PageWrapper>
        <Head>
          <title>Arteries</title>
          <meta name="description" content="Próbafeladat"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <MainBanner/>
      </PageWrapper>
    </div>
  );
}
