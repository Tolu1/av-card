import Image from "next/image";
import { cn } from "@/lib/utils";

const user = {
  name: "Virtue Anoisike",
  email: "Virtue@gmail.com",
  avatar: "/images/dashboard/user-avatar.jpg",
};

export function UserInfo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <Image
        src={user.avatar}
        alt=""
        width={40}
        height={40}
        className="size-10 rounded-full"
      />
      <div className="flex flex-col gap-px">
        <p className="text-sm leading-[21px] font-medium text-[#0a112f]">
          {user.name}
        </p>
        <p className="text-xs leading-[18px] text-[#70707a]">{user.email}</p>
      </div>
    </div>
  );
}
