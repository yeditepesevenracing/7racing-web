import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/common/title";
import Link from "next/link";

interface BlogPreview {
  title: string;
  contents: string;
  href: string;
}

const previews: BlogPreview[] = [
  {
    title: "Lorem Ipsum",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "",
  },
  {
    title: "Lorem Ipsum",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "",
  },
  {
    title: "Lorem Ipsum",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "",
  },
];

const Blog = () => {
  return (
    <>
      <Title text="What we are up to" />
      <div className="[&:hover>div]:opacity-50">
        {previews.map((p) => {
          return (
            <BlogPreviewCard
              title={p.title}
              contents={p.contents}
              href={p.href}
            />
          );
        })}
      </div>
    </>
  );
};

const BlogPreviewCard = ({ title, contents, href }: BlogPreview) => {
  return (
    <div className="hover:!opacity-100">
      <Link href={href}>
        <Card className="m-10">
          <CardHeader className="text-4xl">
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-extralight">
            <p>{contents}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Blog;
