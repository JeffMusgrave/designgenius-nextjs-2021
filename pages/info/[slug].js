import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import StandardPageLayout from "../../components/Layouts/standardpage";
import MDXComponents from "../../components/MDXComponents";

export default function LandingPage({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <StandardPageLayout frontMatter={frontMatter}>{content}</StandardPageLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("info");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("info", params.slug);

  return { props: post };
}
