import MyProfilePic from "./components/MyProfilePic";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Johns blog",
  description: "Created by john",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900">
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
