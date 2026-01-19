import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowRightLong } from "react-icons/fa6";
interface serviceCardProps {
  title: string;
  description: string;
  type: string;
  link: string;
}

export function ServiceCard({
  title,
  description,
  type,
  link,
}: serviceCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-medium">
              {type}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="pt-4 flex items-center text-sm font-medium text-primary">
          <span className="relative">
            詳しく見る
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </span>
          <FaArrowRightLong className="ml-2 transition-transform group-hover:translate-x-1" />
        </CardFooter>
      </Card>
    </a>
  );
}
