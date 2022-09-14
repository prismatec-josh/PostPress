import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PostPreview from "../components/PostPreview";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getServerSideProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map((props) => {
            return (
              <li key={props._id}>
                <PostPreview props={props}></PostPreview>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
