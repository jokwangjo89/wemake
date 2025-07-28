
import { Link, type MetaFunction } from "react-router";
import { ChevronUpIcon, DotIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "../../features/products/components/product-card";
import { PostCard } from "../../features/community/components/post-card";
import { IdeaCard } from "../../features/ideas/components/idea-card";

export const meta:MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function Homepage() {
  return (  
    <div className="px-20 space-y-40" >
      <div className="grid grid-cols-3 gap-4">
        <div >
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">Today's Products</h2>
          <p className="text-xl font-light text-foreground">The best products made by our community today.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
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
      <div className="grid grid-cols-3 gap-4">
        <div >
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">Latest Discussions</h2>
          <p className="text-xl font-light text-foreground">The latest discussions from our community.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => ( 
          <PostCard
          postId="postId"
          title="What is the best productivity tool?"
          author="Nico" 
          authorAvatar="https://github.com/apple.png"
          category="Productivity"
          timeAgo="12 hours ago"
        />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div >
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">IdeasGPT</h2>
          <p className="text-xl font-light text-foreground">Find ideas for your next project.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
          ideaId="ideaId"
          title="A startup that creates a AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
          viewCount={123}
          timeAgo="12 hours ago"
          likeCount={12}
          claimed ={index % 2 === 0}
        />
        ))}
      </div>
  </div>
  );
} 