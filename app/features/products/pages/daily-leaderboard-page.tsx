import { type MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Leaderboard | wemake" },
    { name: "description", content: "Top products of the day" },
  ];
};

export default function DailyLeaderboardPage() {
  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Daily Leaderboard</h1>
        <p className="text-xl font-light text-foreground">Top products of the day based on votes and engagement</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard
            key={index}
            to={`/products/${index + 1}`}
            title={`Today's Best Product ${index + 1}`}
            description={`This product was one of the best performers today.`}
            commentCount={Math.floor(Math.random() * 100) + 50}
            viewCount={Math.floor(Math.random() * 5000) + 2000}
            voteCount={Math.floor(Math.random() * 1000) + 500}
            MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
            EyeIcon={<EyeIcon className="w-4 h-4" />}
            ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
          />
        ))}
      </div>
    </div>
  );
} 