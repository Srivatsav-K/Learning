import { ReactNode } from "react";

const Card = ({
  children,
  customClass,
}: {
  children: ReactNode;
  customClass?: string;
}) => {
  return (
    <div
      className={`p-8 border my-4 bg-slate-100 rounded-md shadow-sm ${customClass}`}
    >
      {children}
    </div>
  );
};
export default Card;
