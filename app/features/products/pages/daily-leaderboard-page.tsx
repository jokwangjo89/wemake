import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse } from "react-router";
import { z } from "zod";

const paramSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: pasedData } = paramSchema.safeParse(params);
  if(!success) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject(pasedData).setZone("Asia/Seoul");
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
    date, 
  }
}  


export default function DailyLeaderboardPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Daily Leaderboard</h1>
        <p className="text-gray-600 mb-8">
          Top products of the day based on votes and engagement
        </p>
      </div>
  );
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