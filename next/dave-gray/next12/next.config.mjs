/** @type {import('next').NextConfig} */
const nextConfig = {
  // We need to add this to allow the images to be fetched from external source.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/gitdagray/test-blogposts/main/images/**",
      },
    ],
  },
};

export default nextConfig;
