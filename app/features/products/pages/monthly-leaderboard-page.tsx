import { DateTime } from "luxon";
import type { Route } from "./+types/monthly-leaderboard-page";
import { data, isRouteErrorResponse } from "react-router";
import { z } from "zod";
import { HeroHeader } from "~/common/components/hero-header";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { ProductCard } from "../components/product-card";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ProductPagination } from "~/common/components/product-pagination";

const paramSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramSchema.safeParse(params);
  if(!success) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject({
    year: parsedData.year,
    month: parsedData.month,
  }).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("month");
  if(date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      { status: 400 }
    );
  }
  return {
    ...parsedData, 
  }
}  


export default function MonthlyLeaderboardPage(
  { loaderData, }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  });
  const previousMonth = urlDate.minus({ months: 1 });
  const nextMonth = urlDate.plus({ months: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("month"));
  return <div className="space-y-10">
    <HeroHeader title={`Best of ${urlDate.toLocaleString({month: "long",year: "2-digit"})}`}  
      description="Top products of the month based on votes and engagement" />
    <div className="flex items-center justify-center gap-4">
      <Link to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}>
        <Button variant="secondary">&larr; {previousMonth.toLocaleString({month: "long",year: "2-digit"})}
        </Button>
      </Link>
      {!isToday ? 
      <Button variant="secondary" asChild>
        <Link to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}>
          {nextMonth.toLocaleString({month: "long",year: "2-digit"})} &rarr;
        </Link>
      </Button>
      : null
      }
    </div>
    <div className="space-y-5 w-full max-w-screen-md mx-auto">
      {Array.from({ length: 10 }).map((_, index) => ( 
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
    <ProductPagination totalPages={10} />
    
  </div>
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.data.message} / {error.data.error_code}</p>
      </div>
    );
  }
  if(error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div>Unknown Error</div>
  );
}