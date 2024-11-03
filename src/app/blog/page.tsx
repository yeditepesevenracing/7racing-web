import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/common/title";

interface BlogPreview {
  title: string;
  contents: string;
}

const previews: BlogPreview[] = [
  {
    title: "Lorem Ipsum",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Lorem Ipsum",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Lorem Ipsum",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Blog = () => {
  return (
    <>
      <Title text="What we are up to" />
      {previews.map((p) => {
        return <BlogPreviewCard title={p.title} contents={p.contents} />;
      })}
    </>
  );
};

const BlogPreviewCard = ({ title, contents }: BlogPreview) => {
  return (
    <Card className="m-10">
      <CardHeader className="text-4xl">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-xl font-extralight">
        <p>{contents}</p>
      </CardContent>
    </Card>
  );
};

export default Blog;
