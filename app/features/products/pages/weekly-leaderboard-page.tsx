import { DateTime } from "luxon";
import type { Route } from "./+types/weekly-leaderboard-page";
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
  week: z.coerce.number(),
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
    weekYear: parsedData.year,
    weekNumber: parsedData.week,
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
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
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


export default function WeeklyLeaderboardPage(
  { loaderData, }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });
  const previousWeek = urlDate.minus({ weeks: 1 });
  const nextWeek = urlDate.plus({ weeks: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("week"));
  return <div className="space-y-10">
    <HeroHeader title={`Best of week ${urlDate.startOf("week").toLocaleString(DateTime.DATE_SHORT)
      } - ${urlDate.endOf("week").toLocaleString(DateTime.DATE_SHORT)}`}  
      description="Top products of the week based on votes and engagement" />
    <div className="flex items-center justify-center gap-4">
      <Link to={`/products/leaderboards/weekly/${previousWeek.year}/${previousWeek.weekNumber}`}>
        <Button variant="secondary">&larr; {previousWeek.toLocaleString(DateTime.DATE_SHORT)}</Button>
      </Link>
      {!isToday ? 
      <Button variant="secondary" asChild>
        <Link to={`/products/leaderboards/weekly/${nextWeek.year}/${nextWeek.weekNumber}`}>
          {nextWeek.toLocaleString(DateTime.DATE_SHORT)} &rarr;
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