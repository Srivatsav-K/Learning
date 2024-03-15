type Props = {
  tagName: string;
};
const Tag = ({ tagName }: Props) => {
  return (
    <span className="px-3 py-1 bg-slate-200 border rounded-lg mr-2 my-2">
      {tagName}
    </span>
  );
};
export default Tag;
