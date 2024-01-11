const getUserPosts = async (userId: string): Promise<Post[] | undefined> => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  const options: RequestInit = { next: { revalidate: 60 } };
  // cache options:
  // force-cache -> will cache the data always : best if we know the exact params and are sure they wont change. (Next caches data by default using this setting)
  // no-store -> will never cache : best for constantly changing data

  /*
    Incremental Static Regeneration (ISR) 
    - Create the page and after an interval in seconds, check if there is an update
    - const options: RequestInit = { next: { revalidate: 60 } }; // 60s
  */

  const res = await fetch(url, options);

  if (!res.ok) {
    // throw new Error("Failed to fetch user posts");
    return undefined;
  }

  return res.json();
};
export default getUserPosts;
