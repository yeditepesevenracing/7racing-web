interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h1 className="font-sans font-extrabold text-7xl m-10">{text}</h1>;
};

export default Title;
