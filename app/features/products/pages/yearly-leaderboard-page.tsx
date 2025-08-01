import { type MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Leaderboard | wemake" },
    { name: "description", content: "Top products of the year" },
  ];
};

export default function YearlyLeaderboardPage() {
  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Yearly Leaderboard</h1>
        <p className="text-xl font-light text-foreground">Top products of the year based on votes and engagement</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            key={index}
            to={`/products/${index + 1}`}
            title={`Year's Best Product ${index + 1}`}
            description={`This product was one of the best performers throughout the year.`}
            commentCount={Math.floor(Math.random() * 200) + 100}
            viewCount={Math.floor(Math.random() * 10000) + 5000}
            voteCount={Math.floor(Math.random() * 2000) + 1000}
            MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
            EyeIcon={<EyeIcon className="w-4 h-4" />}
            ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
          />
        ))}
      </div>
    </div>
  );
} 