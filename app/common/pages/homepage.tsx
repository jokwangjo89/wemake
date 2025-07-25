
import { Link, type MetaFunction } from "react-router";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "../../features/products/components/product-card";

export const meta:MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function Homepage() {
  return (  
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div >
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">Today's Products</h2>
          <p className="text-xl font-light text-foreground">The best products made by our community today.</p>
        </div>
          {Array.from({length: 10}).map((_, index) => ( 
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
      </div>
  </div>
  );
} 