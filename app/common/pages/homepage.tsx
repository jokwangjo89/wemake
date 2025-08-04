
import { Link, type MetaFunction } from "react-router";
import type { Route } from "../../+types/routes";
import { Car, ChevronUpIcon, DotIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "../../features/products/components/product-card";
import { PostCard } from "../../features/community/components/post-card";
import { IdeaCard } from "../../features/ideas/components/idea-card";
import { JobCard } from "../../features/jobs/components/job-card";
import { TeamCard } from "../../features/teams/components/team-card";


export const meta:MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export const loader = () => {
  console.log("hello");
  return {
    hello: "world",
    hello2: "world2",
  };
};

export default function Homepage({ loaderData }: Route["ComponentProps"]) {
  return (  
    <div className="px-20 space-y-40" >
      <div className="grid grid-cols-3 gap-4">
        <div >
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">Today's Products{JSON.stringify(loaderData)}</h2>
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
      <div className="grid grid-cols-4 gap-4">
        <div >
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">Latest Jobs</h2>
          <p className="text-xl font-light text-foreground">Find your dream job.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
          jobId="jobId"
          company="NVIDIA"
          companyLogoUrl="https://github.com/nvidia.png"
          companyHq="San Francisco, CA"
          title="Software Engineer"
          postedAt="12 hours ago"
          positionLocation="Remote"
          type="Full-time"
          salary="$100,000 - $120,000"
        />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div >
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">Find a team mate</h2>
          <p className="text-xl font-light text-foreground">Join a team looking for a new member.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/teams"> Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <TeamCard
          teamId="teamId"
          leaderUserName="kwangjo"
          leaderAvatarUrl="https://github.com/jokwangjo89.png"
          leaderInitial="N"
          positions={["React Developer", "Backend Developer", "Product Manager"]}
          projectDescription="a new social media platform"
        />
        ))}
      </div>
  </div>
  );
} 