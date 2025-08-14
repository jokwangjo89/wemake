import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "../../../common/components/ui/card";
import { Button } from "../../../common/components/ui/button";
import type { ReactNode } from "react";

interface ProductCardProps {
  to: string;
  title: string;
  description: string;
  commentCount: number;
  viewCount: number;
  voteCount: number;
  MessageCircleIcon: ReactNode;
  EyeIcon: ReactNode;
  ChevronUpIcon: ReactNode;
}

export function ProductCard({
  to,
  title,
  description,
  commentCount,
  viewCount,
  voteCount,
  MessageCircleIcon,
  EyeIcon,
  ChevronUpIcon,
}: ProductCardProps) {
  return (
    <Link to={to} className="block">
      <Card className="w-full flex items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              {MessageCircleIcon}
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              {EyeIcon}
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col h-14">
            {ChevronUpIcon}
            <span>{voteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 