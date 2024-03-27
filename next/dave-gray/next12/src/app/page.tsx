import Posts from "@/components/Posts";

export const revalidate = 86400; // 1d

const Home = () => {
  return (
    <div className="mx-auto">
      {/* @ts-ignore */}
      <Posts />
    </div>
  );
};

export default Home;
