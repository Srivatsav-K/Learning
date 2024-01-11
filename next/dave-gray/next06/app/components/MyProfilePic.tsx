import Image from "next/image";

const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/profile_picture.png"
        alt="john"
        width={200}
        height={200}
        priority={true}
        className="mx-auto mt-8 border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
      />
    </section>
  );
};
export default MyProfilePic;
