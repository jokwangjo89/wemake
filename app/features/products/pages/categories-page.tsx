import { type MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage() {
  const categories = [
    "Productivity",
    "Design",
    "Development",
    "Marketing",
    "Finance",
    "Health",
    "Education",
    "Entertainment",
    "Social",
    "Business"
  ];

  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Categories</h1>
        <p className="text-xl font-light text-foreground">Browse products by category</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={category} className="space-y-4">
            <h2 className="text-3xl font-bold">{category}</h2>
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 5 }).map((_, productIndex) => (
                <ProductCard
                  key={productIndex}
                  to={`/products/categories/${category.toLowerCase()}/${productIndex + 1}`}
                  title={`${category} Product ${productIndex + 1}`}
                  description={`A great ${category.toLowerCase()} product that solves real problems.`}
                  commentCount={Math.floor(Math.random() * 50) + 10}
                  viewCount={Math.floor(Math.random() * 2000) + 500}
                  voteCount={Math.floor(Math.random() * 300) + 100}
                  MessageCircleIcon={<MessageCircleIcon className="w-4 h-4" />}
                  EyeIcon={<EyeIcon className="w-4 h-4" />}
                  ChevronUpIcon={<ChevronUpIcon className="size-4 shrink-0" />}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 