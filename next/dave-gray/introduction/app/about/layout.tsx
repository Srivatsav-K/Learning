type AboutLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "About",
  description: "About page",
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return <div>{children}</div>;
};
export default AboutLayout;
