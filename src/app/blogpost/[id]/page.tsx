import Title from "@/components/common/title";
import Paragraph from "@/components/common/paragraph";

const BlogPost = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;
  const dummy =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="flex flex-col">
      <Title text="Lorem Ipsum" className="w-full" />
      <Paragraph>{dummy}</Paragraph>
    </div>
  );
};

export default BlogPost;
