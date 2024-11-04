import Title from "@/components/common/title";

const BlogPost = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;
  return (
    <>
      <Title text="Lorem Ipsum" className="flex justify-center" />
    </>
  );
};

export default BlogPost;
