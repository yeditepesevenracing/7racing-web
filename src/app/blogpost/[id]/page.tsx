import Title from "@/components/common/title";
import Paragraph from "@/components/common/paragraph";

const BlogPost = async ({ params }: { params: Promise<{ id: number }> }) => {
  // Fetch the blog post from the server using the id and then show its contents
  const id = (await params).id;

  const dummy =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="flex flex-col items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div>
        <Title text="Lorem Ipsum" className="m-10 items-center" />
      </div>
      <Paragraph first>{dummy}</Paragraph>
      <Paragraph>{dummy}</Paragraph>
      <Paragraph>{dummy}</Paragraph>
    </div>
  );
};

export default BlogPost;
