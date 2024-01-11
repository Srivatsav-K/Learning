import Link from "next/link";

type ItemProps = {
  result: Result;
};

const Item = ({ result }: ItemProps) => {
  const wikipediaLink = `https://en.wikipidea.org/?curid=${result.pageid}`;

  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={wikipediaLink}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <img
            src={result?.thumbnail?.source}
            alt={result?.title}
            width={result?.thumbnail?.width}
            height={result?.thumbnail?.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  );

  return content;
};
export default Item;
