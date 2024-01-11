"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}/`);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search"
        className="bg-white p-2 w-80 text-xl rounded-xl "
      />

      <input
        type="submit"
        value="🚀"
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold hover:cursor-pointer"
      />
    </form>
  );
};

export default Search;
