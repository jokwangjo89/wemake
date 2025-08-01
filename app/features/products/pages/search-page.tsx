import { type MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon, Search } from "lucide-react";
import { Input } from "../../../common/components/ui/input";
import { Button } from "../../../common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

export default function SearchPage() {
  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Search Products</h1>
        <p className="text-xl font-light text-foreground">Find the perfect product for your needs</p>
      </div>
      
      <div className="max-w-2xl space-y-4">
        <div className="flex gap-2">
          <Input 
            placeholder="Search for products..." 
            className="flex-1"
          />
          <Button>
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            key={index}
            to={`/products/${index + 1}`}
            title={`Search Result ${index + 1}`}
            description={`This product matches your search criteria and solves real problems.`}
            commentCount={Math.floor(Math.random() * 60) + 15}
            viewCount={Math.floor(Math.random() * 2500) + 800}
            voteCount={Math.floor(Math.random() * 350) + 120}
            MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
            EyeIcon={<EyeIcon className="w-4 h-4" />}
            ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
          />
        ))}
      </div>
    </div>
  );
} 