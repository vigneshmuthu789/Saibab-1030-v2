import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-divine-cream shadow-md hover:shadow-lg transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}


