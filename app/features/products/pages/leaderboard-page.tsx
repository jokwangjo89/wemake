import { Link, type MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";
import type { Route } from "./+types/leaderboard-page";
import { HeroHeader } from "../../../common/components/hero-header";
import { Button } from "~/common/components/ui/button";



export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboard | wemake" },
    { name: "description", content: "Top products on wemake" },
  ];
};

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <HeroHeader 
        title="Leaderboard"
        description="The most popular products on wemake"
      />
      <div className="grid grid-cols-3 gap-4">
          <div >
            <h2 className="text-3xl font-bold leading-tight tracking-tighter">Daily Leaderboard</h2>
            <p className="text-xl font-light text-foreground">The most popular products on wemake by day.</p>
          </div>
            {Array.from({length: 7}).map((_, index) => ( 
              <ProductCard
              to="/products/productId"
              title="Product Name"
              description="Product Description"
              commentCount={12}
              viewCount={12}
              voteCount={120}
              MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
              EyeIcon={<EyeIcon className="w-4 h-4" />}
              ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
            />
            ))}
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/daily">
            Explore all products &rarr;
          </Link>
        </Button>
        
      </div>
      <div className="grid grid-cols-3 gap-4">
          <div >
            <h2 className="text-3xl font-bold leading-tight tracking-tighter">Weekly Leaderboard</h2>
            <p className="text-xl font-light text-foreground">The most popular products on wemake by week.</p>
          </div>
            {Array.from({length: 7}).map((_, index) => ( 
              <ProductCard
              to="/products/productId"
              title="Product Name"
              description="Product Description"
              commentCount={12}
              viewCount={12}
              voteCount={120}
              MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
              EyeIcon={<EyeIcon className="w-4 h-4" />}
              ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
            />
            ))}
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/weekly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
          <div >
            <h2 className="text-3xl font-bold leading-tight tracking-tighter">Monthly Leaderboard</h2>
            <p className="text-xl font-light text-foreground">The most popular products on wemake by month.</p>
          </div>
            {Array.from({length: 7}).map((_, index) => ( 
              <ProductCard
              to="/products/productId"
              title="Product Name"
              description="Product Description"
              commentCount={12}
              viewCount={12}
              voteCount={120}
              MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
              EyeIcon={<EyeIcon className="w-4 h-4" />}
              ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
            />
            ))}
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/monthly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
          <div >
            <h2 className="text-3xl font-bold leading-tight tracking-tighter">Yearly Leaderboard</h2>
            <p className="text-xl font-light text-foreground">The most popular products on wemake by year.</p>
          </div>
            {Array.from({length: 7}).map((_, index) => ( 
              <ProductCard
              to="/products/productId"
              title="Product Name"
              description="Product Description"
              commentCount={12}
              viewCount={12}
              voteCount={120}
              MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
              EyeIcon={<EyeIcon className="w-4 h-4" />}
              ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
            />
            ))}
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/yearly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}