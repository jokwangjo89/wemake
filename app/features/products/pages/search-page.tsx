import { ProductCard } from "../components/product-card";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon, Search } from "lucide-react";
import { Input } from "../../../common/components/ui/input";
import { Button } from "../../../common/components/ui/button";
import type { Route } from "./+types/search-page";  
import z from "zod";
import { HeroHeader } from "~/common/components/hero-header";
import { ProductPagination } from "~/common/components/product-pagination";
import { Form } from "react-router";


export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" },
  ];
};


const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw new Error("Invalid search parameters");
  }
  console.log(parsedData);
};
export default function SearchPage() {
  return (
    <div className="space-y-10">
      <HeroHeader title="Search" description="Search for products by title or description" />
      <Form className="flex justify-center max-w-screen-sm mx-auto items-center gap-2">
        <Input name="query" placeholder="Search for products..." className="text-lg" />
        <Button type="submit">Search</Button>
      </Form>
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
    
  );
} 