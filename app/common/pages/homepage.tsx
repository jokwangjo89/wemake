import type { Route } from "../../+types/routes";
import { Button } from "../components/ui/button";

export function loader({ request }: Route["LoaderArgs"]) {
  return {};
}

export function action({ request }: Route["ActionArgs"]) {
  return {};
}

export const meta: Route["MetaFunction"] = () => [
  {
    title: "홈페이지",
    description: "위메이크 홈페이지입니다.",
  },
];

export function Homepage(_props: Route["ComponentProps"]) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">위메이크에 오신 것을 환영합니다!</h1>
      <p className="mb-8 text-lg text-gray-700">이곳은 위메이크의 메인 페이지입니다.</p>
      <Button>시작하기</Button>
    </main>
  );
}

export default Homepage; 