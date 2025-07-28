import { Link } from "react-router";
import { EyeIcon, DotIcon, HeartIcon, LockIcon } from "lucide-react";
import { Button } from "../../../common/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../common/components/ui/card";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  ideaId: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likeCount: number;
  claimed?: boolean;
}

export function IdeaCard({ ideaId, title, viewCount, timeAgo, likeCount, claimed }: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${ideaId}`}>
          <CardTitle className="text-xl">
            <span className={cn (claimed ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground" : "")}>{title}</span>
          </CardTitle>  
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-2">
          <EyeIcon className="w-4 h-4" />
          <span>{viewCount}</span>
        </div >
        <DotIcon className="w-4 h-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">
          <HeartIcon className="w-4 h-4" />
          <span>{likeCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${ideaId}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ):(
          <Button variant="outline" className="cursor-not-allowed">
            <LockIcon className="size-4" />
            <span>Claimed</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
} 