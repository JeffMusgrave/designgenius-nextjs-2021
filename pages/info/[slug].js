import { getFiles, getFileBySlug } from "../../lib/mdx";
import StandardPageLayout from "../../components/Layouts/standardpage";
import { MDXRemote } from "next-mdx-remote";

export default function LandingPage({ source, frontMatter }) {
  return (
    <StandardPageLayout frontMatter={frontMatter}>
      <MDXRemote {...source} />
    </StandardPageLayout>
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
