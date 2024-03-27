import Link from "next/link";
import { Meta } from "@/types/types";
import { getFormattedDate } from "@/lib/utils";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4">
      <Link
        className="md:text-xl font-semibold underline hover:text-foreground/80"
        href={`/posts/${id}`}
      >
        {title}
      </Link>

      <p className="text-sm text-muted-foreground mt-1 ">{formattedDate}</p>
    </li>
  );
}
