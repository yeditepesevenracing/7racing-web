const BlogPost = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;
  return <h1>Blog post {id}</h1>;
};

export default BlogPost;
