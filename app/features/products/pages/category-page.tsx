import { type MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Category | wemake" },
    { name: "description", content: "Products in this category" },
  ];
};

export default function CategoryPage() {
  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Category Products</h1>
        <p className="text-xl font-light text-foreground">Discover amazing products in this category</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 15 }).map((_, index) => (
          <ProductCard
            key={index}
            to={`/products/${index + 1}`}
            title={`Category Product ${index + 1}`}
            description={`This is a great product in this category that solves real problems.`}
            commentCount={Math.floor(Math.random() * 80) + 20}
            viewCount={Math.floor(Math.random() * 3000) + 1000}
            voteCount={Math.floor(Math.random() * 400) + 150}
            MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
            EyeIcon={<EyeIcon className="w-4 h-4" />}
            ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
          />
        ))}
      </div>
    </div>
  );
} 