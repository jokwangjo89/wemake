import { type MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Products | wemake" },
    { name: "description", content: "Discover amazing products made by our community" },
  ];
};

export default function ProductsPage() {
  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Products</h1>
        <p className="text-xl font-light text-foreground">Discover amazing products made by our community</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductCard
            key={index}
            to={`/products/${index + 1}`}
            title={`Product ${index + 1}`}
            description={`This is a description for product ${index + 1}. It's an amazing product that solves real problems.`}
            commentCount={Math.floor(Math.random() * 50) + 1}
            viewCount={Math.floor(Math.random() * 1000) + 100}
            voteCount={Math.floor(Math.random() * 500) + 50}
            MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
            EyeIcon={<EyeIcon className="w-4 h-4" />}
            ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
          />
        ))}
      </div>
    </div>
  );
} 