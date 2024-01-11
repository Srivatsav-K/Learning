type VariantType = "h1" | "h2" | "h3";

type HeadingProps = {
  children: React.ReactNode;
  variant?: VariantType;
  customClasses?: React.ComponentPropsWithRef<"div">["className"];
};

const Heading = ({ children, variant = "h1", customClasses }: HeadingProps) => {
  const renderHeading = (variant: VariantType) => {
    switch (variant) {
      case "h2":
        return (
          <h2 className={`text-xl font-bold ${customClasses}`}>{children}</h2>
        );

      case "h3":
        return (
          <h3 className={`text-l font-bold ${customClasses}`}>{children}</h3>
        );

      case "h1":
      default:
        return (
          <h1 className={`text-3xl font-bold ${customClasses}`}>{children}</h1>
        );
    }
  };

  return renderHeading(variant);
};
export default Heading;
