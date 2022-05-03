import { getAllFilesAllMetadata } from "../lib/mdx";
const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Jaziel Rodriguez Blog</h1>
      <p>Aquí encontraras todos mis conocimientos, disponible para ti</p>
    </div>
  );
};
export default Blog;

export async function getStaticProps() {
  const posts = await getAllFilesAllMetadata;
  console.log(posts);
  return {
    props: { posts },
  };
}
