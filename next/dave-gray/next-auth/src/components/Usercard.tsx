import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

type UsercardProps = {
  userInfo?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};
const Usercard = ({ userInfo }: UsercardProps) => {
  return (
    <Card key="1" className="w-72">
      <CardHeader className="pb-0" />
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center space-y-2">
          {userInfo?.image ? (
            <div className="w-20 h-20 relative overflow-hidden rounded-full">
              <Image
                alt="User avatar"
                className="rounded-full object-cover translate-x-0 translate-y-0"
                height={80}
                src={userInfo?.image}
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
            </div>
          ) : null}

          <div className="grid gap-0.5 text-sm text-center">
            <div className="font-medium">{userInfo?.name}</div>
            <div className="text-gray-500 dark:text-gray-400">
              {userInfo?.email}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Usercard;
