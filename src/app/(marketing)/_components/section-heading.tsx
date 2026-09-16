import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  badge,
  title,
  className,
}: {
  badge: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-col items-center gap-5 text-center", className)}
    >
      <Badge variant="section">{badge}</Badge>
      <h2 className="text-[36px] leading-[43.88px] font-bold">{title}</h2>
    </div>
  );
}
